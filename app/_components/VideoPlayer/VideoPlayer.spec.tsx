import { renderHook } from '@testing-library/react-hooks'
import { useVideoPlayer } from './VideoPlayer.hook'
import { render, screen } from '@testing-library/react';
import {VideoPlayer} from './VideoPlayer'

jest.mock('../VideoControls/VideoControls', () => ({
    VideoControls: () => <div>VideoControlsComponent</div>
}))

describe('VideoPlayer', ()  => {

    it('should render a video element', () => {
        // Arrange
        const rendered = render(<VideoPlayer source={''} poster={''} />)
        // Act
        const videoElement = screen.getByText('you browser does not support this video')
        // Assert
        expect(videoElement).toBeInTheDocument();
    })

    it('should render the video controls', () => {
         // Arrange
         const rendered = render(<VideoPlayer source={''} poster={''} />)
         const videoControlsComponent = screen.getByText('VideoControlsComponent')
         // Act
         // Assert
         expect(videoControlsComponent).toBeInTheDocument();
    })

});

describe('useVideoPlayer', () => {
    it('should return the videoConfig', () => {
        const { result } = renderHook(() => useVideoPlayer())
        expect(result.current.playerConfig).toEqual({
            onPlay: expect.any(Function),
            onPause: expect.any(Function),
            onSeek: expect.any(Function),
            onVolumeChange: expect.any(Function),
            onToggleFullScreen: expect.any(Function),
        })
    })
})


// * Nunca é impossível testar um component
// * Hooks tem que ser muito bem testados
// AAA funciona
// 