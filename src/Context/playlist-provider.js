import { createContext, useContext, useState, useReducer } from 'react'
import {playlistReducer, initState} from '../Reducers/playlist-reducer'

const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {
    const [togglePlaylistModal, setTogglePlaylistModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState({})
    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initState)
    return (
        <PlaylistContext.Provider value={{ togglePlaylistModal, setTogglePlaylistModal, setSelectedVideo, selectedVideo, playlistDispatch, playlistState }}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export { usePlaylist, PlaylistProvider }