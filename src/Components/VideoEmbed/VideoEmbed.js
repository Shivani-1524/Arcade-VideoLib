import React, { useEffect, useState } from 'react'
import { fetchVideoDetails } from '../../Utils/get-singlevideo'
import ReactPlayer from 'react-player'
import './videoembed.css'

const VideoEmbed = ({ videoUrl }) => {
  return (
    <div className='center-items resp-video'>
      <ReactPlayer url={videoUrl} width="100%"
        height="100%" controls={false} />
    </div>
  )
}

export { VideoEmbed }