import React from 'react'
import { useEffect, useState } from 'react'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistmodal.css'
import { addVideoToPlaylist, createPlaylist, fetchUserPlaylists } from '../../Utils/playlist-utils'

const PlaylistModal = () => {
  useEffect(() => {
    (async () => {
      await fetchUserPlaylists()
    })()
  }, [])
  const test = ['gte4', 'ge4tg', 'y6yt6d', 'yhtjyj']
  const { setTogglePlaylistModal } = usePlaylist()
  const [showPlaylistForm, setShowPlaylistForm] = useState(false)
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [playlistSubtitle, setPlaylistSubtitle] = useState('')
  return (
    <div className='modal-bg center-items'>

      <div className='playlist-modal'>
        {showPlaylistForm ?
          <form className='playlist-form'>
            <button onClick={() => setTogglePlaylistModal(false)}>CLOSE</button>
            <div>
              <label className='plform-label'>Title</label>
              <input className='plform-input' onChange={(e) => setPlaylistTitle(e.target.value)} type="text" placeholder='Enter Playlist Title' />
            </div>
            <div>
              <label className='plform-label'>Subtitle</label>
              <input className='plform-input' onChange={(e) => setPlaylistSubtitle(e.target.value)} type="text" placeholder='Enter Playlist Subtitle' />
            </div>
          </form> :

          <div>
            <button onClick={() => setTogglePlaylistModal(false)}>CLOSE</button>
            <p className='sm-p' onClick={() => setShowPlaylistForm(true)}>Create New PLaylist</p>
            {test.map(item =>
              <div className='playlist-items'>
                <input htmlFor={item} type="checkbox" />
                <label id={item}>{item}</label>
              </div>)}
          </div>

        }
      </div>
    </div>

  )
}

export { PlaylistModal }