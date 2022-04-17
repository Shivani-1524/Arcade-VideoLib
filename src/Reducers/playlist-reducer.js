
const initState = {
    playlist: []
}

const playlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "UPDATE_PLAYLIST":
            return { ...state, playlist: [...payload] }
        case "UPDATE_PLAYLIST_VIDEO":
            const updatedVideoList = payload
            const newList = [...state.playlist]
            const foundPlaylistIndex = newList.findIndex((list) => list._id === updatedVideoList._id)
            newList[foundPlaylistIndex] = updatedVideoList
            return { ...state, playlist: newList }
        default:
            return state
    }
}

export { playlistReducer, initState }