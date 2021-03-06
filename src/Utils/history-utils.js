import axios from 'axios'



const fetchUserHistory = async () => {
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    try {
        const res = await axios.get("/api/user/history")
        console.log("Hiostory data", res)
        if (res.status === 201 || res.status === 200) {
            return {
                data: res.data,
                errorData: [false]
            }
        }
        return {
            data: '',
            errorData: [true, res]
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
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
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
            errorData: [true, res]
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
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
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
            errorData: [true, res]
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
    const encodedToken = localStorage.getItem("userToken")
    axios.defaults.headers.common['authorization'] = encodedToken;
    const { data } = await fetchUserHistory()
    console.log(data)
    const foundInHistory = data?.history?.some(video => video._id === clickedVideo._id)
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
            return {
                data: "",
                errorData: [true, res]
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