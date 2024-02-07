import { useRef, useState } from 'react'

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playerStatus, setPlayerStatus] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0,
    isMuted: false,
    isFullScreen: false,
  })

  const playerConfig = {
    onPlay: () => {
      videoRef.current?.play()
      setPlayerStatus({ ...playerStatus, isPlaying: true })
    },
    onPause: () => {
      videoRef.current?.pause()
      setPlayerStatus({ ...playerStatus, isPlaying: false })
    },
    onSeek: (time: number) => {
      videoRef.current!.currentTime = time
      setPlayerStatus({ ...playerStatus, currentTime: time })
    },
    onVolumeChange: (volume: number) => {
      videoRef.current!.volume = volume
      setPlayerStatus({ ...playerStatus, volume })
    },
    onToggleFullScreen: () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
        setPlayerStatus({ ...playerStatus, isFullScreen: false })
      } else {
        videoRef.current?.requestFullscreen()
        setPlayerStatus({ ...playerStatus, isFullScreen: true })
      }
    },
  }

  return { videoRef, playerConfig, playerStatus }
}
