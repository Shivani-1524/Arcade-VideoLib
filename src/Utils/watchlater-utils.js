import axios from 'axios'





const addToWatchlater = async (clickedVideo) => {
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios({
            method: "POST",
            url: "/api/user/watchlater",
            data: {
                video: clickedVideo
            }
        })
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
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = axios.get('/api/user/watchlater')
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
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios.delete(`/api/user/watchlater/${videoId}`)
        if (res.status === 201 || res.status === 200) {
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


export { addToWatchlater, deleteFromWatchlater, fetchWatchlaterVideos }