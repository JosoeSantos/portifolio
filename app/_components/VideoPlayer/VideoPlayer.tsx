'use client'

import { VideoControls } from '../VideoControls/VideoControls'
import { useVideoPlayer } from './VideoPlayer.hook'

export interface VideoPlayerProps {
  source: string
  poster: string
  // title: string
  // autoPlay: boolean
  // controls: boolean
  // loop: boolean
  // muted: boolean
  // onPlay: () => void
  // onPause: () => void
  // onEnded: () => void
  // onTimeUpdate: (currentTime: number) => void
  // onLoadedMetadata: (duration: number) => void
  // onVolumeChange: (volume: number) => void
  // onToggleFullScreen: () => void
}

export function VideoPlayer(props: VideoPlayerProps) {
  const { source, poster } = props
  const { videoRef, playerConfig, playerStatus } = useVideoPlayer()
  return (
    <div className="w-screen aspect-video flex bg-black">
      <video src={source} poster={poster} ref={videoRef} className="z-0">
        you browser does not support this video
      </video>
      <VideoControls
        isPlaying={playerStatus.isPlaying}
        onPlay={playerConfig.onPlay}
        onPause={playerConfig.onPause}
        onSeek={playerConfig.onSeek}
        onVolumeChange={playerConfig.onVolumeChange}
        onToggleFullScreen={playerConfig.onToggleFullScreen}
        currentTime={0}
        duration={0}
        volume={0}
        isMuted={false}
        isFullScreen={playerStatus.isFullScreen}
      />
    </div>
  )
}
