import React from 'react'
import { useEffect, useState } from 'react'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistmodal.css'
import { addVideoToPlaylist, createPlaylist, fetchUserPlaylists } from '../../Utils/playlist-utils'

const PlaylistModal = () => {
  useEffect(() => {
    (async () => {
      const res = await fetchUserPlaylists()
    })()
  }, [])
  const test = ['gte4', 'ge4tg', 'y6yt6d', 'yhtjyj']
  const [vidPlaylistEntry, setVidPlaylistEntry] = useState([])
  const { setTogglePlaylistModal, selectedVideo, playlistState, playlistDispatch } = usePlaylist()
  const [showPlaylistForm, setShowPlaylistForm] = useState(false)
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [playlistSubtitle, setPlaylistSubtitle] = useState('')

  const handleCreatePlaylist = async (e) => {
    e.preventDefault()
    const { data, errorData } = await createPlaylist(playlistTitle, playlistSubtitle)
    !errorData[0] ? playlistDispatch({ type: "UPDATE_PLAYLIST", payload: data?.playlists }) : console.error(errorData[1])
    //add video to playlist
  }

  const handleAddToPlaylist = async (vidEntryPlaylist) => {
    let res;
    for (let playlist of vidEntryPlaylist) {
      res = await addVideoToPlaylist(playlist, selectedVideo)
    }
    console.log(res)
  }

  return (
    <div className='modal-bg center-items'>
      <div className='playlist-modal'>
        {showPlaylistForm ?
          <form className='playlist-form pos-rel'>
            <i onClick={() => setTogglePlaylistModal(false)} className="fa fa-times pos-abs close-icon" aria-hidden="true"></i>
            <div className='pl-input mg-t-15'>
              <label className='plform-label rg-p'>Title</label>
              <input className='plform-input mg-t-5' onChange={(e) => setPlaylistTitle(e.target.value)} type="text" placeholder='Enter Playlist Title' />
            </div>
            <div className='pl-input mg-t-15'>
              <label className='plform-label rg-p'>Subtitle</label>
              <input className='plform-input mg-t-5' onChange={(e) => setPlaylistSubtitle(e.target.value)} type="text" placeholder='Enter Playlist Subtitle' />
            </div>
            <button type='submit' onClick={(e) => handleCreatePlaylist(e, playlistTitle, playlistSubtitle)} className="btn primary-btn solid mg-t-10">
              Done
            </button>
          </form> :
          <div className='pos-rel'>
            <i onClick={() => setTogglePlaylistModal(false)} className="fa fa-times pos-abs close-icon" aria-hidden="true"></i>
            <div className='pl-modal-layout'>
              <p className='rg-p mg-t-20 btn-createpl' onClick={() => setShowPlaylistForm(true)}>Create New Playlist <i className="fa fa-solid fa-plus"></i></p>
              {test.map(item =>
                <div className='playlist-items rg-p'>
                  <input id={item} onChange={(e) => {
                    e.target.checked && setVidPlaylistEntry(prev => [...prev, item])
                  }} type="checkbox" />
                  <label htmlFor={item}>{item}</label>
                </div>)}
              <button onClick={() => handleAddToPlaylist()} className="btn primary-btn solid mg-t-10">
                Done
              </button>
            </div>
          </div>

        }
      </div>
    </div>

  )
}

export { PlaylistModal }