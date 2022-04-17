import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VideoDrawer } from '../VideoDrawer/VideoDrawer'
import './videocard.css'
import { deleteHistoryVideo } from '../../Utils/history-utils'
import { addLikedVideo, removeLikedVideo } from '../../Utils/likevideo-utils'
import { useHistory } from '../../Context/history-provider'
import { useAuth } from '../../Context/auth-provider'
import { useLikedVideo } from '../../Context/likevideo-provider'
import { findElementInData } from '../../Utils/common-utils'

const VideoCard = ({ props, type }) => {
    const [isDrawerHidden, setIsDrawerHidden] = useState(true);
    const { historyDispatch } = useHistory()
    const [toggleLike, setToggleLike] = useState(false);
    const { _id, title, channelName, thumbnail } = props
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const { likedVideoDispatch, likedVideoState } = useLikedVideo()

    const handleHistoryDelete = async (videoId) => {
        const { data, errorData } = await deleteHistoryVideo(videoId)
        !errorData[0] ? historyDispatch({ type: "UPDATE_HISTORY", payload: data }) : console.error(errorData[1])
    }
    const handleLikeDelete = async (videoId) => {
        const { data, errorData } = await removeLikedVideo(videoId)
        !errorData[0] ? likedVideoDispatch({ type: "UPDATE_LIKEDLIST", payload: data?.likes }) : console.error(errorData[1])
    }

    const isLikedVideo = findElementInData(likedVideoState.likedVideoList, _id)

    const topButton = (type) => {
        switch (type) {
            case "history":
                return (
                    <button onClick={() => handleHistoryDelete(_id)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                        <i className="close-icon fas fa-times-circle delete-icon"></i>
                    </button>
                )
            case "like":
                return (
                    <button onClick={() => handleLikeDelete(_id)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                        <i className="close-icon fas fa-times-circle delete-icon"></i>
                    </button>
                )
            default:
                return (<button onClick={async () => {
                    if (isLoggedIn) {
                        setToggleLike(prev => !prev)
                        const { data, errorData } = !toggleLike ? await addLikedVideo(props) : await removeLikedVideo(props._id)
                        !errorData[0] ? likedVideoDispatch({ type: 'UPDATE_LIKEDLIST', payload: data.likes }) : console.error(errorData[1])
                    } else {
                        navigate('/login')
                    }
                }}
                    className="btn icon-btn pos-abs top-right star-toggle-btn">
                    {toggleLike || isLikedVideo ? <i className="fas fa-star filled"></i> : <i className="fas fa-star"></i>}
                </button>
                )
        }
    }

    return (
        <div className="card ver-card no-bg-color">
            <div className="img-container pos-rel">
                <Link to={`/video/${_id}`}>
                    <img className="img-resp" src={thumbnail} alt="card" />
                </Link>
                {topButton(type)}
            </div>
            <div className="text-card">
                <div>
                    <p className="sm-booky-title bold">{title}</p>
                    <p className="xsm-p grey-txt">{channelName}</p>
                </div>
                <div onClick={() => setIsDrawerHidden(prev => !prev)} className='bg-kebab'>
                    <i className="fas fa fa-solid fa-ellipsis-vertical"></i>
                </div>
                {!isDrawerHidden && <VideoDrawer />}
            </div>
        </div>
    )
}

export { VideoCard }