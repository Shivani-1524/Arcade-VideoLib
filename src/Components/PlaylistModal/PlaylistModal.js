import React from 'react'
import { useEffect, useState } from 'react'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistmodal.css'
import { addVideoToPlaylist, createPlaylist, fetchUserPlaylists, removeVideoFromPlaylist } from '../../Utils/playlist-utils'
import { findElementInData } from '../../Utils/common-utils.js'

const PlaylistModal = () => {
  useEffect(() => {
    (async () => {
      const { data, errorData } = await fetchUserPlaylists()
      !errorData[0] ? playlistDispatch({ type: "UPDATE_PLAYLIST", payload: data?.playlists }) : console.error(errorData[1])
    })()
  })
  const [vidPlaylistEntry, setVidPlaylistEntry] = useState([])
  const [vidPlaylistDelete, setVidPlaylistDelete] = useState([])
  const { setTogglePlaylistModal, selectedVideo, playlistState, playlistDispatch } = usePlaylist()
  const [showPlaylistForm, setShowPlaylistForm] = useState(false)
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [playlistSubtitle, setPlaylistSubtitle] = useState('')

  const handleCreatePlaylist = async (e) => {
    e.preventDefault()
    const { data, errorData } = await createPlaylist(playlistTitle, playlistSubtitle)
    !errorData[0] ? playlistDispatch({ type: "UPDATE_PLAYLIST", payload: data?.playlists }) : console.error(errorData[1])
    setShowPlaylistForm(false)
  }

  const handleAddToPlaylist = async (vidEntryPlaylist, vidDeletePlaylist) => {
    for (let playlist of vidEntryPlaylist) {
      const isInPlaylist = playlist.videos.some(video => video._id === selectedVideo._id)
      if (!isInPlaylist) {
        await addVideoToPlaylist(playlist._id, selectedVideo)
      }
    }
    for (let playlist of vidDeletePlaylist) {
      const isInPlaylist = playlist.videos.some(video => video._id === selectedVideo._id)
      if (isInPlaylist) {
        await removeVideoFromPlaylist(playlist._id, selectedVideo._id)
      }
    }
    const { data, errorData } = await fetchUserPlaylists()
    console.log(data?.playlists)
    !errorData[0] ? playlistDispatch({ type: "UPDATE_PLAYLIST", payload: data?.playlists }) : console.error(errorData[1])
    setVidPlaylistEntry([])
    setVidPlaylistDelete([])
    setTogglePlaylistModal(false)
  }


  return (
    <div className='modal-bg center-items'>
      <div className='playlist-modal'>
        {showPlaylistForm ?
          <form className='playlist-form pos-rel'>
            <i onClick={() => setTogglePlaylistModal(false)} className="fa fa-times pos-abs plclose-icon" aria-hidden="true"></i>
            <div className='pl-input mg-t-15'>
              <label className='plform-label rg-p'>Title</label>
              <input className='plform-input mg-t-5' onChange={(e) => setPlaylistTitle(e.target.value)} type="text" placeholder='Enter Playlist Title' />
            </div>
            <div className='pl-input mg-t-15'>
              <label className='plform-label rg-p'>Subtitle</label>
              <input className='plform-input mg-t-5' onChange={(e) => setPlaylistSubtitle(e.target.value)} type="text" placeholder='Enter Playlist Subtitle' />
            </div>
            <div className="modal-btn-wrapper mg-t-20">
              <button type='submit' onClick={(e) => handleCreatePlaylist(e, playlistTitle, playlistSubtitle)} className="btn primary-btn solid mg-t-10">
                Done
              </button>
              <button type='submit' onClick={(e) => setShowPlaylistForm(false)} className="btn primary-btn solid mg-t-10">
                Back
              </button>
            </div>
          </form> :
          <div className='pos-rel'>
            <i onClick={() => setTogglePlaylistModal(false)} className="fa fa-times pos-abs plclose-icon" aria-hidden="true"></i>
            <div className='pl-modal-layout'>
              <p className='rg-p mg-t-20 btn-createpl' onClick={() => setShowPlaylistForm(true)}>Create New Playlist <i className="fa fa-solid fa-plus"></i></p>
              {playlistState?.playlist.map(item => {
                const isInPlaylist = item.videos.some(video => video._id === selectedVideo._id)
                return (
                  <div key={item._id} className='playlist-items rg-p'>
                    <input id={item.title} onChange={(e) => {
                      e.target.checked ? setVidPlaylistEntry(prev => [...prev, item]) : setVidPlaylistDelete(prev => [...prev, item])
                    }} defaultChecked={isInPlaylist} type="checkbox" />
                    <label htmlFor={item.title}>{item.title}</label>
                  </div>
                )
              })}
              <button onClick={() => handleAddToPlaylist(vidPlaylistEntry, vidPlaylistDelete)} className="btn primary-btn solid mg-t-10">
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