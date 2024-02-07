import { VideoPlayer } from '../_components/VideoPlayer/VideoPlayer'

export default async function Page() {
  return (
    <main className="flex items-center justify-center">
      <VideoPlayer source="/video/SampleVideo_1280x720_1mb.mp4" poster={''} />
    </main>
  )
}
