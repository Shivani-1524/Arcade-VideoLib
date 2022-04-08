import React from 'react'
import { useParams } from 'react-router-dom'

const SingleVideoPage = () => {
    const { videoId } = useParams()
    return (
        <div>SingleVideoPage
            <h1>{videoId}</h1>
        </div>
    )
}

export { SingleVideoPage }