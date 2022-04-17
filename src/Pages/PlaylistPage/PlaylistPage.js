import React from 'react'
import { VideoCard } from '../../Components/VideoCard/VideoCard'

const PlaylistPage = () => {
  const test = ['frfed', 'ferf', 'hyth', 'fefwwae']
  return (
    <div>
      <button>Create New Playlist</button>
      {test.map(item => <VideoCard />)}
    </div>
  )
}

export { PlaylistPage }