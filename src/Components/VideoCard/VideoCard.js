import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VideoDrawer } from '../VideoDrawer/VideoDrawer'
import './videocard.css'
import { deleteHistoryVideo } from '../../Utils/history-utils'
import { useHistory } from '../../Context/history-provider'

const VideoCard = ({ props, type }) => {
    const [isDrawerHidden, setIsDrawerHidden] = useState(true);
    const { historyDispatch } = useHistory()
    const [toggleLike, setToggleLike] = useState(false);
    const { _id, title, channelName, thumbnail } = props

    const handleHistoryDelete = async (videoId) => {
        const { data, errorData } = await deleteHistoryVideo(videoId)
        !errorData[0] ? historyDispatch({ type: "UPDATE_HISTORY", payload: data }) : console.error(errorData[1])
    }


    const topButton = (type) => {
        if (type === "history") {
            return (
                <button onClick={() => handleHistoryDelete(_id)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                    <i className="close-icon fas fa-times-circle delete-icon"></i>
                </button>
            )
        }
        return (
            <button onClick={() => setToggleLike(prev => !prev)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                {toggleLike ? <i className="fas fa-star filled"></i> : <i className="fas fa-star"></i>}
            </button>
        )

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

                {!isDrawerHidden && <VideoDrawer video={props} />}
            </div>
        </div>
    )
}

export { VideoCard }