import React, { useState } from 'react'
import './videodrawer.css'
import { useWatchlater } from '../../Context/watchlater-provider'
import { useAuth } from '../../Context/auth-provider'
import { addToWatchlater, deleteFromWatchlater } from '../../Utils/watchlater-utils'
import { findElementInData } from '../../Utils/common-utils'
import { useNavigate } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-provider'

const VideoDrawer = ({ video, onSelect }) => {
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()
    const { setTogglePlaylistModal, setSelectedVideo } = usePlaylist()
    const { watchlaterDispatch, watchlaterState } = useWatchlater()
    const isWatchLater = findElementInData(watchlaterState.watchlaterList, video._id)
    const handleWatchLater = async () => {
        if (isLoggedIn) {
            const isWatchLater = findElementInData(watchlaterState.watchlaterList, video._id)
            if (isWatchLater) {
                const { data, errorData } = await deleteFromWatchlater(video?._id)
                !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
            } else {
                const { data, errorData } = await addToWatchlater(video)
                !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
            }
        } else {
            navigate('/login')
        }
    }


    return (
        <div className='flex-col video-drawer'>
            <div className='kebab-item' onClick={() => {
                if (isLoggedIn) {
                    setTogglePlaylistModal(true)
                    setSelectedVideo(video)
                    onSelect()
                } else navigate('/login')
            }}>
                <p> Save To Playlist</p>
            </div>
            <div className='kebab-item' onClick={handleWatchLater}>
                {isWatchLater ? <p>Remove from Watch Later</p> : <p>Add To Watch Later</p>}
            </div>
        </div>
    )
}

export { VideoDrawer }