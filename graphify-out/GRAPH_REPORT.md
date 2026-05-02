# Graph Report - livekit-voice-agent  (2026-05-01)

## Corpus Check
- 57 files · ~31,927 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 162 nodes · 124 edges · 12 communities detected
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `useMessageBranch()` - 6 edges
2. `loadFileData()` - 4 edges
3. `AgentAudioVisualizerGrid()` - 3 edges
4. `Agent` - 2 edges
5. `useDebugMode()` - 2 edges
6. `useAnimatedValue()` - 2 edges
7. `useAgentAudioVisualizerAura()` - 2 edges
8. `useAnimatedValue()` - 2 edges
9. `useAgentAudioVisualizerWave()` - 2 edges
10. `useAgentAudioVisualizerGridAnimator()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `AppSetup()` --calls--> `useDebugMode()`  [INFERRED]
  frontend/components/app/app.tsx → frontend/hooks/useDebug.ts
- `AgentAudioVisualizerGrid()` --calls--> `useAgentAudioVisualizerGridAnimator()`  [INFERRED]
  frontend/components/agents-ui/agent-audio-visualizer-grid.tsx → frontend/hooks/agents-ui/use-agent-audio-visualizer-grid.ts
- `RootLayout()` --calls--> `getStyles()`  [INFERRED]
  frontend/app/layout.tsx → frontend/lib/utils.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (5): isVectorType(), log(), processUniform(), Texture, uniformTypeToGLSLType()

### Community 1 - "Community 1"
Cohesion: 0.24
Nodes (6): MessageBranchContent(), MessageBranchNext(), MessageBranchPage(), MessageBranchPrevious(), MessageBranchSelector(), useMessageBranch()

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (3): AgentAudioVisualizerGrid(), useGrid(), useAgentAudioVisualizerGridAnimator()

### Community 3 - "Community 3"
Cohesion: 0.43
Nodes (4): doesLocalFileExist(), getImageData(), isRemoteFile(), loadFileData()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (2): findGcdLessThan(), generateListeningSequenceBar()

### Community 6 - "Community 6"
Cohesion: 0.4
Nodes (2): RootLayout(), getStyles()

### Community 7 - "Community 7"
Cohesion: 0.5
Nodes (2): AppSetup(), useDebugMode()

### Community 12 - "Community 12"
Cohesion: 0.67
Nodes (1): Agent

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (2): useAgentAudioVisualizerAura(), useAnimatedValue()

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (2): useAgentAudioVisualizerWave(), useAnimatedValue()

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (2): createParticipantToken(), POST()

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (2): AgentTrackToggle(), getSourceIcon()

## Knowledge Gaps
- **Thin community `Community 5`** (5 nodes): `findGcdLessThan()`, `generateConnectingSequenceBar()`, `generateListeningSequenceBar()`, `useAgentAudioVisualizerRadialAnimator()`, `use-agent-audio-visualizer-radial.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (5 nodes): `RootLayout()`, `layout.tsx`, `utils.ts`, `getSandboxTokenSource()`, `getStyles()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (4 nodes): `AppSetup()`, `app.tsx`, `useDebug.ts`, `useDebugMode()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (3 nodes): `agent.ts`, `Agent`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (3 nodes): `useAgentAudioVisualizerAura()`, `useAnimatedValue()`, `use-agent-audio-visualizer-aura.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (3 nodes): `useAgentAudioVisualizerWave()`, `useAnimatedValue()`, `use-agent-audio-visualizer-wave.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (3 nodes): `route.ts`, `createParticipantToken()`, `POST()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (3 nodes): `AgentTrackToggle()`, `getSourceIcon()`, `agent-track-toggle.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._