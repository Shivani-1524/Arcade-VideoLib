import React, { useEffect, useState } from 'react'
import { fetchVideoDetails } from '../../Utils/get-singlevideo'

const VideoEmbed = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  useEffect(() => {
    (async () => {
      const { data, errorData, msg } = await fetchVideoDetails(videoId)
      console.log(data)
      !errorData[0] ? setVideoDetails(data) : console.log(errorData[1])
    })()
  }, []);
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        // src={`https://www.youtube.com/embed/${videoDetails.videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export { VideoEmbed }