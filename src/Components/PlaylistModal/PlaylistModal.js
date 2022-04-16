import React from 'react'
import { useEffect } from 'react'
import { usePlaylist } from '../../Context/playlist-provider'
import './playlistmodal.css'
import { addVideoToPlaylist, createPlaylist, fetchUserPlaylists } from '../../Utils/playlist-utils'

const PlaylistModal = () => {
  useEffect(()=>{
    (async()=>{
       await fetchUserPlaylists()
    })()
  },[])
    const test = [1,2,3,4,9]
    const {setTogglePlaylistModal } = usePlaylist()
  return (
    <div className='modal-bg center-items'>
     <div className='playlist-modal'>
       <button onClick={()=>setTogglePlaylistModal(false)}>CLOSE</button>
         <p className='sm-p '>Create New PLaylist</p>
         

         {test.map(item => 
         <div className='playlist-items'>
          <input htmlFor={item} type="checkbox"/>
         <label id={item}>{item}</label>
         </div>)}
     </div>
     </div>
     
  )
}

export {PlaylistModal}