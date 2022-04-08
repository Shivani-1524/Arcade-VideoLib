import React from 'react'
import './videodrawer.css'

const VideoDrawer = () => {
    return (
        <div className='flex-col video-drawer'>
            <div className='kebab-item'>
                <p> Save To Playlist</p>
            </div>
            <div className='kebab-item'>
                <p>Add To Watch Later</p>
            </div>
        </div>
    )
}

export { VideoDrawer }