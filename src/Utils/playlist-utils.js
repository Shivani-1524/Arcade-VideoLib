import axios from 'axios'




//GETS ALL PLAYLISTS
const fetchUserPlaylists = async () => {
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios.get("/api/user/playlists")
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }
}

//ADDS NEW PLYLIST
const createPlaylist = async (playlistTitle, playlistDesc) => {
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios.post("/api/user/playlists",
            { playlist: { title: playlistTitle, description: playlistDesc } },
        )
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }
}

//DELETES PLAYLIST
const removePlaylist = async (playlistId) => {
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}`)
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }
}


//ADDS VIDEO TO PLAYLIST
const addVideoToPlaylist = async (playlistId, video) => {
    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        })
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }
}

//DELETES VIDEO FROM PLAYLISTT

const removeVideoFromPlaylist = async (playlistId, videoId) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`)
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }
}

const fetchPlaylistDetails = async (playlistId) => {
    try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`)
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: res.data,
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, "Unexpected error ocurred. Please try again Later"]
        }
    }

}

export { fetchPlaylistDetails, removeVideoFromPlaylist, createPlaylist, fetchUserPlaylists, addVideoToPlaylist, removePlaylist }