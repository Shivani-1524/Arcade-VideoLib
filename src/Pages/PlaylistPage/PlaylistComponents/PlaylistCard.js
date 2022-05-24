import React from 'react'
import { Link } from 'react-router-dom'
import './playlistcard.css'
import { removePlaylist } from '../../../Utils/playlist-utils'
import { usePlaylist } from '../../../Context/playlist-provider'

const PlaylistCard = ({ playlist }) => {
    const { title, description, videos, _id } = playlist
    const { playlistDispatch } = usePlaylist()
    const handleDeletePlaylist = async (id) => {
        const { data, errorData } = await removePlaylist(id)
        !errorData[0] ? playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: data.playlists }) : console.error(errorData[1])
    }
    return (

        <div className='playlist-card pos-rel'>
            <i onClick={() => handleDeletePlaylist(_id)} className="fa fa-solid fa-trash pos-abs delete-icon"></i>
            <Link to={`/videos/playlists/${_id}`}>
                <p className='video-header'><span className="bold violet-txt video-num">{videos.length}</span> Videos</p>
                <p className='rg-p bold'>{title}</p>
                <p className='rg-p'>{description}</p>
            </Link>
        </div >


    )
}

export { PlaylistCard }