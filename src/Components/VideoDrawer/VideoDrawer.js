import React, { useState } from 'react'
import './videodrawer.css'
import { useWatchlater } from '../../Context/watchlater-provider'
import { useAuth } from '../../Context/auth-provider'
import { addToWatchlater, deleteFromWatchlater } from '../../Utils/watchlater-utils'
import { findElementInData } from '../../Utils/common-utils'
import { useNavigate } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-provider'

const VideoDrawer = (drawerProps) => {
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()
    const { selectedVid } = drawerProps
    const { watchlaterDispatch, watchlaterState } = useWatchlater()
    const isWatchLater = findElementInData(watchlaterState.watchlaterList, selectedVid._id)
    const handleWatchLater = async () => {
        if (isLoggedIn) {
            const isWatchLater = findElementInData(watchlaterState.watchlaterList, selectedVid._id)
            if (isWatchLater) {
                const { data, errorData } = await deleteFromWatchlater(selectedVid?._id)
                !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
            } else {
                const { data, errorData } = await addToWatchlater(selectedVid)
                !errorData[0] ? watchlaterDispatch({ type: 'UPDATE_WATCHLATER', payload: data?.watchlater }) : console.error(errorData[1])
            }
        } else {
            navigate('/login')
        }
    }


    const VideoDrawer = ({ video, onSelect }) => {
        const { setTogglePlaylistModal, setSelectedVideo } = usePlaylist()
        return (
            <div className='flex-col video-drawer'>
                <div className='kebab-item' onClick={() => {
                    setTogglePlaylistModal(true)
                    setSelectedVideo(video)
                    onSelect()
                }}>
                    <p> Save To Playlist</p>
                </div>
                <div className='kebab-item' onClick={handleWatchLater}>
                    {isWatchLater ? <p>Remove from Watch Later</p> : <p>Add To Watch Later</p>}
                </div>
            </div>
        )
    }
}

export { VideoDrawer }