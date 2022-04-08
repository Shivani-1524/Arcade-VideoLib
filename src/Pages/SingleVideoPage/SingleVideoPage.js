import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singlevideopage.css'
import { VideoEmbed } from '../../Components/VideoEmbed/VideoEmbed'
import { fetchVideoDetails } from '../../Utils/get-singlevideo'

const SingleVideoPage = () => {
    const { videoId } = useParams()
    const [videoDetails, setVideoDetails] = useState(false);
    const { videoUrl, channelName, channelImg, title, description } = videoDetails && videoDetails?.video
    useEffect(() => {
        (async () => {
            const { data, errorData, msg } = await fetchVideoDetails(videoId)
            !errorData[0] ? setVideoDetails(data) : console.log(errorData[1])
        })()
    }, []);

    return (
        videoDetails &&
        <div>
            <VideoEmbed videoUrl={videoUrl} />
            <div className='video-desc'>
                <div className="spc-bw">
                    <div className='video-header'>
                        <div className="avatar rg">
                            <img className="avatar-img" src={channelImg} alt={channelName} />
                        </div>
                        <div>
                            <p className='rg-title'>{title}</p>
                            <p className="sm-title grey-txt">{channelName}</p>
                        </div>
                    </div>
                    <div className='video-actions'>
                        <i className="fas fa fa-solid fa-thumbs-up"></i>
                        <i className="fa fas fa-solid fa-list-check"></i>
                        <i className="fa fas fa-solid fa-clock-rotate-left"></i>
                    </div>
                </div>
                <hr className='mg-t-10' />
                <p className="sm-p desc mg-t-20">{description}</p>
            </div>
        </div>
    )
}

export { SingleVideoPage }