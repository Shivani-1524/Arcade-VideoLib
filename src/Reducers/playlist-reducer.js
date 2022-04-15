
const initState = {
    playlist: []
}

const playlistReducer = (state, { type, payload }) => {
    switch (type) {
        case "UPDATE_PLAYLIST":
            return { ...state, playlist: [...payload] }
        default:
            return state
    }
}

export { playlistReducer, initState }