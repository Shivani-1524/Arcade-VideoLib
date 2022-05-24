import React from 'react'
import { PlaylistCard } from './PlaylistComponents/PlaylistCard'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistpage.css'
import { EmptyPage } from '../../Components/EmptyPage/EmptyPage'

const PlaylistPage = () => {
  const { playlistState } = usePlaylist()
  const orderedList = [...playlistState.playlist].reverse()
  return (
    orderedList.length > 0 ?
      <div className='video-layout playlist-layout'>
        {orderedList.map(playlist => <PlaylistCard playlist={playlist} />)}
      </div> : <EmptyPage />
  )
}

export { PlaylistPage }