import React from 'react'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistmodal.css'

const PlaylistModal = () => {
    const test = [1,2,3,4,9]
    const {togglePlaylistModal, setTogglePlaylistModal } = usePlaylist()
  return (
    <div className='playlist-modal'>
      <button onClick={()=>setTogglePlaylistModal(false)}>CLOSE</button>
        <p>Playlists</p>
        <div>Create New PLaylist</div>
        {test.map(item => <div>{item}</div>)}
    </div>
  )
}

export {PlaylistModal}