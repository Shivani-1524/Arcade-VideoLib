import axios from 'axios'

const encodedToken = localStorage.getItem("userToken")
// axios.defaults.headers.common['authorization'] = encodedToken;


//GETS ALL PLAYLISTS
const fetchUserPlaylists = async () => {
    // try {
    console.log("IN")
    const res = await axios.get("/api/user/playlists", {
        headers: {
            authorization: encodedToken,
        },
    })
    console.log(res)
    //     if (res.status === 200 || res.status === 201) {
    //         return {
    //             data: res.data,
    //             errorData: [false]
    //         }
    //     }
    //     return {
    //         data: res.data,
    //         errorData: [true, res.statusText]
    //     }
    // } catch (err) {
    //     console.error(err)
    //     return {
    //         data: "",
    //         errorData: [true, "Unexpected error ocurred. Please try again Later"]
    //     }
    //}
}

//ADDS NEW PLYLIST
const createPlaylist = async (playlistTitle, playlistDesc) => {
    // try {
    const res = await axios.post("/api/user/playlists",
        { playlist: { title: playlistTitle, description: playlistDesc } }, {
        headers: {
            authorization: encodedToken,
        },
    })
    console.log(res)
    //     if (res.status === 200 || res.status === 201) {
    //         return {
    //             data: res.data,
    //             errorData: [false]
    //         }
    //     }
    //     return {
    //         data: res.data,
    //         errorData: [true, res.statusText]
    //     }
    // } catch (err) {
    //     console.error(err)
    //     return {
    //         data: "",
    //         errorData: [true, "Unexpected error ocurred. Please try again Later"]
    //     }
    // }
}

//DELETES PLAYLIST
const removePlaylist = async (playlistId) => {
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

export { removeVideoFromPlaylist, createPlaylist, fetchUserPlaylists, addVideoToPlaylist, removePlaylist }