import React, { useState } from 'react'
import './videodrawer.css'

const VideoDrawer = () => {
    const [toggleWatchLater, setToggleWatchLater] = useState(false);
    return (
        <div className='flex-col video-drawer'>
            <div className='kebab-item' onClick={() => { }}>
                <p>Save To Playlist</p>
            </div>
            <div className='kebab-item' onClick={() => setToggleWatchLater(prev => !prev)}>
                {toggleWatchLater ? <p>Remove from Watch Later</p> : <p>Add To Watch Later</p>}
            </div>
        </div>
    )
}

export { VideoDrawer }