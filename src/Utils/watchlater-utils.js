import axios from 'axios'

const encodedToken = localStorage.getItem("userToken")
axios.defaults.headers.common['authorization'] = encodedToken;



const addToWatchlater = async (clickedVideo) => {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/user/watchlater",
            data: {
                video: clickedVideo
            }
        })
        console.log("RESPONSE", res)
        if (res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, err]
        }
    }
}

const fetchWatchlaterVideos = async () => {
    try {
        const res = axios.get('/api/user/watchlater')
        console.log("RESPONSE", res)
        if (res.status === 201) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, err]
        }
    }

}

const deleteFromWatchlater = async (videoId) => {
    // try {
    const res = await axios.delete(`/api/user/watchlater/${videoId}`)
    console.log("RESPONSE", res)
    //     if (res.status === 201) {
    //         return {
    //             data: res.data,
    //             errorData: [false]
    //         }
    //     }
    // } catch (err) {
    //     console.error(err)
    //     return {
    //         data: "",
    //         errorData: [true, err]
    //     }
    // }

}


export { addToWatchlater, deleteFromWatchlater, fetchWatchlaterVideos }