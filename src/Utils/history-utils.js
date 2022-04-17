import axios from 'axios'

const encodedToken = localStorage.getItem("userToken")
axios.defaults.headers.common['authorization'] = encodedToken;

const fetchUserHistory = async () => {
    try {
        const res = await axios.get("/api/user/history")
        if (res.status === 201 || res.status === 200) {
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

const deleteHistoryVideo = async (videoId) => {
    try {
        const res = await axios.delete(`/api/user/history/${videoId}`)
        if (res.status === 201 || res.status === 200) {
            return {
                data: res.data.history,
                errorData: [false]
            }
        }
        return {
            data: "",
            errorData: [true, res.statusText]
        }
    } catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, err]
        }
    }
}

const clearHistory = async () => {
    try {
        const res = await axios.delete("/api/user/history/all")
        if (res.status === 201 || res.status === 200) {
            return {
                data: res.data.history,
                errorData: [false]
            }
        }
        return {
            data: "",
            errorData: [true, res.status]
        }
    }
    catch (err) {
        console.error(err)
        return {
            data: "",
            errorData: [true, err]
        }
    }
}

const sendUserHistory = async (clickedVideo) => {
    const { data } = await fetchUserHistory()
    const foundInHistory = data?.history.some(video => video._id === clickedVideo._id)
    if (foundInHistory === false) {
        try {
            const res = await axios({
                method: "POST",
                url: "/api/user/history",
                data: {
                    video: clickedVideo
                }
            })
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
    } else {
        return {
            data: "",
            errorData: [true, 'present in history']
        }
    }
}

export { fetchUserHistory, sendUserHistory, deleteHistoryVideo, clearHistory }