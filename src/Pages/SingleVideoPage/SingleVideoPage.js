import React from 'react'
import { useParams } from 'react-router-dom'
import './singlevideopage.css'
import { VideoEmbed } from '../../Components/VideoEmbed/VideoEmbed'

const SingleVideoPage = () => {
    const { videoId } = useParams()

    return (
        <div>SingleVideoPage
            <VideoEmbed videoId={videoId} />
        </div>
    )
}

export { SingleVideoPage }