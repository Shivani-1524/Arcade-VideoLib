import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './singlevideopage.css'
import { findElementInData, addToWatchlater, deleteFromWatchlater, fetchVideoDetails, sendUserHistory, addLikedVideo, removeLikedVideo } from '../../Utils/get-singlevideo'
import { usePlaylist, useWatchlater, useLikedVideo } from '../../Context/index'
import { PlaylistModal, VideoEmbed } from '../../Components/index'



const SingleVideoPage = () => {
    const { videoId } = useParams()
    const { watchlaterState, watchlaterDispatch } = useWatchlater()
    const { likedVideoState, likedVideoDispatch } = useLikedVideo()
    const isWatchLater = findElementInData(watchlaterState?.watchlaterList, videoId)
    const isLiked = findElementInData(likedVideoState?.likedVideoList, videoId)
    const [toggleWatchlater, setToggleWatchlater] = useState(isWatchLater)
    const [toggleLike, setToggleLike] = useState(isLiked)
    const { togglePlaylistModal, setTogglePlaylistModal, setSelectedVideo } = usePlaylist()
    const [videoDetails, setVideoDetails] = useState(false);
    const { videoUrl, channelName, channelImg, title, description, _id } = videoDetails && videoDetails?.video
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

    const handleWatchLater = async () => {
        setToggleWatchlater(prev => !prev)
        if (isWatchLater) {
            const { data, errorData } = await deleteFromWatchlater(_id)
            !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
        } else {
            const { data, errorData } = await addToWatchlater(videoDetails?.video)
            !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
        }
    }
    const handleLikeVideo = async () => {
        setToggleLike(prev => !prev)
        if (isLiked) {
            const { data, errorData } = await removeLikedVideo(_id)
            !errorData[0] ? likedVideoDispatch({ type: 'UPDATE_LIKEDLIST', payload: data?.likes }) : console.error(errorData[1])
        } else {
            const { data, errorData } = await addLikedVideo(videoDetails?.video)
            !errorData[0] ? likedVideoDispatch({ type: 'UPDATE_LIKEDLIST', payload: data?.likes }) : console.error(errorData[1])
        }
    }

    return (
        videoDetails &&
        <div>
            <VideoEmbed videoUrl={videoUrl} />
            {togglePlaylistModal && <PlaylistModal />}
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
                        <i onClick={handleLikeVideo} className={isLiked || toggleLike ? "fas fa fa-solid fa-thumbs-up violet-txt" : "fas fa fa-solid fa-thumbs-up"} ></i>
                        <i onClick={() => {
                            setSelectedVideo(videoDetails?.video)
                            setTogglePlaylistModal(true)
                        }} className="fa fas fa-solid fa-list-check"></i>
                        <i onClick={handleWatchLater} className={isWatchLater || toggleWatchlater ? "fa fas fa-solid fa-clock-rotate-left violet-txt" : "fa fas fa-solid fa-clock-rotate-left"}></i>
                    </div >
                </div >
                <hr className='mg-t-10' />
                <p className="sm-p desc mg-t-20">{description}</p>
            </div >
        </div >
    )
}

export { SingleVideoPage }