import axios from 'axios'

const fetchVideoDetails = async (videoId) => {
    try {
        const res = await axios.get(`/api/video/${videoId}`)
        if (res.status === 200) {
            return {
                data: res.data,
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

export { fetchVideoDetails }