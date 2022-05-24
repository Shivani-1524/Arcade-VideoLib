import axios from 'axios'

const encodedToken = localStorage.getItem("userToken")
axios.defaults.headers.common['authorization'] = encodedToken;

const fetchLikedVideos = async () => {
    try {
        const res = await axios.get("/api/user/likes")
        if (res.status === 201 || 200) {
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

const addLikedVideo = async (likedVideo) => {
    try {
        const res = await axios({
            method: "POST",
            data: {
                video: likedVideo
            },
            url: "/api/user/likes"
        })
        if (res.status === 201 || 200) {
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
        return {
            data: '',
            errorData: [true, err]
        }
    }
}


const removeLikedVideo = async (dislikedVideoID) => {
    try {
        const res = await axios({
            method: "DELETE",
            url: `/api/user/likes/${dislikedVideoID}`
        })
        if (res.status === 201 || 200) {
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
        return {
            data: '',
            errorData: [true, err]
        }
    }
}

export { addLikedVideo, fetchLikedVideos, removeLikedVideo }