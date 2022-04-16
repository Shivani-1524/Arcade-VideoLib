import React, {useState} from 'react'
import './videodrawer.css'
import {usePlaylist} from '../../Context/playlist-provider'

const VideoDrawer = ({video, onSelect}) => {
    const {setTogglePlaylistModal, setSelectedVideo} = usePlaylist()
    return (
        <div className='flex-col video-drawer'>
            <div className='kebab-item' onClick={()=>{
                setTogglePlaylistModal(true)
                setSelectedVideo(video)
                onSelect()
            }}>
                <p> Save To Playlist</p>
            </div>
            <div className='kebab-item'>
                <p>Add To Watch Later</p>
            </div>
        </div>
    )
}

export { VideoDrawer }