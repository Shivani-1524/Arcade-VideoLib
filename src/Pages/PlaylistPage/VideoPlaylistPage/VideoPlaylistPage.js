import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchPlaylistDetails } from '../../../Utils/playlist-utils'
import '../playlistpage.css'
import { VideoCard } from '../../../Components/VideoCard/VideoCard'
import { usePlaylist } from '../../../Context/playlist-provider'

const VideoPlaylistPage = () => {
    const { playlistDispatch, playlistState } = usePlaylist()
    const { playlistId } = useParams()
    const navigate = useNavigate()
    const orderedList = [...playlistState.playlist].reverse()
    const listIndex = playlistState && playlistState?.playlist.findIndex(list => list._id === playlistId)
    const { title, description, videos } = playlistState && playlistState?.playlist[listIndex]
    useEffect(() => {
        playlistId ?
            (async () => {
                console.log('THE ID', playlistId)
                const { data, errorData } = await fetchPlaylistDetails(playlistId)
                if (!errorData[0]) {
                    playlistDispatch({ type: "UPDATE_PLAYLIST_VIDEO", payload: data?.playlist })
                } else {
                    console.error(errorData[1])
                }
            })() : navigate('/')
    }, []);

    return (
        orderedList &&
        <div className='playlist-details-layout'>
            <h1 className='mg-t-20'>{title} </h1>
            <p className='rg-p'>{description}</p>
            <div className="video-layout">
                {videos.map(video => <VideoCard type="playlist" playlistId={playlistId} key={video._id} props={video} />)}
            </div>
        </div>
    )
}

export { VideoPlaylistPage }