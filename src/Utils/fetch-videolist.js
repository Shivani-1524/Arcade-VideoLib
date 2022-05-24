import axios from 'axios'

const fetchVideos = async () => {

    try {
        const res = await axios.get("/api/videos")
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data.videos,
                msg: "Data retrieved",
                errorData: [false],
            }
        }
    } catch (err) {
        return {
            data: null,
            msg: "Something went wrong. Please try again Later.",
            errorData: [true, err]
        }
    }
}

export { fetchVideos }