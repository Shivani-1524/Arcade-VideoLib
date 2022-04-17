import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './singlevideopage.css'
import { VideoEmbed } from '../../Components/VideoEmbed/VideoEmbed'
import { fetchVideoDetails } from '../../Utils/get-singlevideo'
import { sendUserHistory } from '../../Utils/history-utils'
import { useWatchlater } from '../../Context/watchlater-provider'
import { findElementInData } from '../../Utils/common-utils'
import { addToWatchlater, deleteFromWatchlater } from '../../Utils/watchlater-utils'

const SingleVideoPage = () => {
    const { videoId } = useParams()
    const { watchlaterState, watchlaterDispatch } = useWatchlater()
    const isWatchLater = findElementInData(watchlaterState?.watchlaterList, videoId)
    const [videoDetails, setVideoDetails] = useState(false);
    const { videoUrl, channelName, channelImg, title, description } = videoDetails && videoDetails?.video
    const navigate = useNavigate()
    useEffect(() => {
        videoId ?
            (async () => {
                const { data, errorData } = await fetchVideoDetails(videoId)
                if (!errorData[0]) {
                    await sendUserHistory(data.video)
                    setVideoDetails(data)
                } else {
                    console.log(errorData[1])
                }
            })() : navigate('/')
    }, [navigate, videoId]);

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
                        <i className={isWatchLater ? "fa fas fa-solid fa-clock-rotate-left violet-txt" : "fa fas fa-solid fa-clock-rotate-left"}></i>
                    </div>
                </div>
                <hr className='mg-t-10' />
                <p className="sm-p desc mg-t-20">{description}</p>
            </div>
        </div>
    )
}

export { SingleVideoPage }