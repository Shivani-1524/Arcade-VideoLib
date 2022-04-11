import React from 'react'
import ReactPlayer from 'react-player'
import './videoembed.css'

const VideoEmbed = ({ videoUrl }) => {
    return (
        <div className='center-items resp-video'>
            {videoUrl && <ReactPlayer url={videoUrl} width="100%"
                height="100%" />}
        </div>
    )
}

export { VideoEmbed }