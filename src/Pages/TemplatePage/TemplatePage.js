import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidenav } from "../../Components/Sidenav/Sidenav"
import "./templatepage.css"
import { Navbar } from '../../Components/Navbar/Navbar'
import { usePlaylist } from '../../Context/playlist-provider'
import { PlaylistModal } from '../../Components/PlaylistModal/PlaylistModal'

const TemplatePage = () => {
    const { togglePlaylistModal } = usePlaylist()
    return (
        <div className="page-layout">
            <Navbar />
            <Sidenav />
            <div className="outlet-container">
                {togglePlaylistModal && <PlaylistModal />}
                <Outlet />
            </div>
        </div>
    )
}

export { TemplatePage }