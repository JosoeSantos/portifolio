import Icon from '../Icon/Icon'
import IconButton from '../IconButton/IconButton'

export interface VideoControlsProps {
  onPlay: () => void
  onPause: () => void
  onSeek: (time: number) => void
  onVolumeChange: (volume: number) => void
  onToggleFullScreen: () => void
  currentTime: number
  duration: number
  volume: number
  isPlaying: boolean
  isMuted: boolean
  isFullScreen: boolean
}

export function VideoControls(props: VideoControlsProps) {
  const { isPlaying, onPlay, onPause, onToggleFullScreen, onVolumeChange } = props
  return (
    <div className="w-full absolute z-10 flex justify-center items-center gap-2 p-4 bg-emerald-600 self-end justify-self-end">
      <IconButton iconName="skip_previous" className=" hover:bg-green-500" />
      {isPlaying ? (
        <IconButton
          iconName="pause"
          className="hover:bg-green-900 hover:text-white"
          onClick={onPause}
        />
      ) : (
        <IconButton
          iconName="play_arrow"
          className="hover:bg-green-900 hover:text-white"
          onClick={onPlay}
        />
      )}
      <IconButton iconName="skip_next" className="hover:bg-green-500 " />
      <IconButton
        iconName="fullscreen"
        className="absolute top-2 right-2 hover:bg-green-500"
        onClick={onToggleFullScreen}
      />
      <IconButton iconName='volume_up' className="absolute top-2 right-2 hover:bg-green-500" />
    </div>
  )
}
