import {
  type JobContext,
  type JobProcess,
  ServerOptions,
  cli,
  defineAgent,
  inference,
  metrics,
  voice,
} from '@livekit/agents';
import { AvatarSession } from '@livekit/agents-plugin-anam';
import * as livekit from '@livekit/agents-plugin-livekit';
import * as silero from '@livekit/agents-plugin-silero';
import { BackgroundVoiceCancellation } from '@livekit/noise-cancellation-node';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { Agent } from './agent';

dotenv.config({ path: '.env.local' });

export default defineAgent({
  prewarm: async (proc: JobProcess) => {
    proc.userData.vad = await silero.VAD.load();
  },
  entry: async (ctx: JobContext) => {
    const session = new voice.AgentSession({
      stt: new inference.STT({
        model: 'deepgram/nova-3',
        language: 'multi',
      }),
      llm: new inference.LLM({
        model: 'openai/gpt-4.1-mini',
      }),
      tts: new inference.TTS({
        model: 'cartesia/sonic-3',
        voice: '9626c31c-bec5-4cca-baa8-f8ba9e84c8bc',
        sampleRate: 24000,
      }),
      turnDetection: new livekit.turnDetector.MultilingualModel(),
      vad: ctx.proc.userData.vad! as silero.VAD,
      voiceOptions: {
        preemptiveGeneration: false,
      },
    });

    const usageCollector = new metrics.UsageCollector();
    session.on(voice.AgentSessionEventTypes.MetricsCollected, (ev) => {
      metrics.logMetrics(ev.metrics);
      usageCollector.collect(ev.metrics);
    });

    ctx.addShutdownCallback(async () => {
      const summary = usageCollector.getSummary();
      console.log(`Usage: ${JSON.stringify(summary)}`);
    });

    await session.start({
      agent: new Agent(),
      room: ctx.room,
      inputOptions: {
        noiseCancellation: BackgroundVoiceCancellation(),
      },
    });

    await ctx.connect();

    // Try Anam avatar - fall back to direct TTS if rate-limited or unavailable
    let avatarStarted = false;
    try {
      const avatarSession = new AvatarSession({
        personaConfig: {
          name: 'Elena',
          avatarId: '9da8944e-a584-4453-b455-ad3be0d0f63d',
        },
        avatarParticipantIdentity: 'Elena',
      });
      await avatarSession.start(session, ctx.room);
      avatarStarted = true;
      console.log('[Agent] Anam avatar started successfully');
    } catch (err: any) {
      // Graceful fallback - use direct TTS without avatar
      console.warn(`[Agent] Anam avatar unavailable (${err.message?.substring(0, 80)}), using direct TTS`);
    }

    // Generate greeting - works with or without Anam
    session.generateReply({
      instructions: avatarStarted
        ? 'Greet the user warmly and introduce yourself as Elena.'
        : 'Greet the user warmly and introduce yourself as Lily.',
    });
  },
});

cli.runApp(
  new ServerOptions({
    agent: fileURLToPath(import.meta.url),
    agentName: 'Lily',
  }),
);
