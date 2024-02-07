import { screen, render } from '@testing-library/react'
import { VideoControls, VideoControlsProps } from './VideoControls'
import userEvent from '@testing-library/user-event'

describe('VideoControls', () => {
  let rendered: ReturnType<typeof render>
  function renderComponent(props?: Partial<VideoControlsProps>) {
    const onPlay = jest.fn()
    const onPause = jest.fn()
    const onSeek = jest.fn()
    const onVolumeChange = jest.fn()
    const onToggleFullScreen = jest.fn()
    rendered = render(
      <VideoControls
        onPlay={onPlay}
        onPause={onPause}
        onSeek={onSeek}
        onVolumeChange={onVolumeChange}
        onToggleFullScreen={onToggleFullScreen}
        currentTime={0}
        duration={0}
        volume={0}
        isPlaying={false}
        isMuted={false}
        isFullScreen={false}
        {...props}
      />
    )

    return { onPlay, onPause, onSeek, onVolumeChange, onToggleFullScreen }
  }

  afterEach(() => {
    rendered.unmount()
  })

  it('renders paused by default', () => {
    renderComponent()
    const videoControls = screen.getByRole('button', { name: 'play_arrow' })
    expect(videoControls).toBeInTheDocument()
  })

  it('renders pause button when playing', () => {
    renderComponent({ isPlaying: true })
    const videoControls = screen.getByRole('button', { name: 'pause' })
    expect(videoControls).toBeInTheDocument()
  })

  it('calls onPlay when play button is clicked', async () => {
    const { onPlay } = renderComponent()
    const videoControls = screen.getByRole('button', { name: 'play_arrow' })
    await userEvent.click(videoControls)
    expect(onPlay).toHaveBeenCalled()
  })

  it('calls onPause when pause button is clicked', async () => {
    const { onPause } = renderComponent({ isPlaying: true })
    const videoControls = screen.getByRole('button', { name: 'pause' })
    await userEvent.click(videoControls)
    expect(onPause).toHaveBeenCalled()
  })

  it('calls onToggleFullScreen when full screen button is clicked', async () => {
    const { onToggleFullScreen } = renderComponent()
    const videoControls = screen.getByRole('button', { name: 'fullscreen' })
    await userEvent.click(videoControls)
    expect(onToggleFullScreen).toHaveBeenCalled()
  })

  it('shoud render a volume button', () => {
    // Arrange
    renderComponent()
    const volumeButton = screen.getByRole('button', { name: 'volume_up'});
    // Act
    // Assert
    expect(volumeButton).toBeInTheDocument();
})
})
