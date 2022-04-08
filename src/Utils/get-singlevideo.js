import axios from 'axios'

const fetchVideoDetails = async (videoId) => {
    try {
        const res = await axios.get(`/api/videos/${videoId}`)
        console.log(res)
        if (res.status === 200) {
            return {
                data: res.data.video,
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