import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VideoDrawer } from '../VideoDrawer/VideoDrawer'
import Dummy from '../../Assets/dummy.jpg'
import './videocard.css'

const VideoCard = ({ props }) => {
    const [isDrawerHidden, setIsDrawerHidden] = useState(true);
    const [toggleLike, setToggleLike] = useState(false);
    const { _id, title, channelName, videoUrl, thumbnail } = props

    return (
        <div className="card ver-card no-bg-color">
            <div className="img-container pos-rel">
                <Link to={`/video/${_id}`}>
                    <img className="img-resp" src={thumbnail} alt="card" />
                </Link>

                <button onClick={() => setToggleLike(prev => !prev)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                    {toggleLike ? <i className="fas fa-star filled"></i> : <i className="fas fa-star"></i>}
                </button>
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