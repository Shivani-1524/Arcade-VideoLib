import axios from 'axios'

const loginUser = async (loginData) => {
    try {
        const res = await axios.post('/api/auth/login', { ...loginData })
        if (res.status === 201 || 200) {
            return {
                data: res.data.encodedToken,
                msg: "Logged in Successfully",
                errorData: [false],
            }
        }
    } catch (err) {
        return {
            data: "",
            msg: "Please Enter Valid Details",
            errorData: [true, err],
        }
    }
}
const signupUser = async (signupData) => {
    try {
        const res = await axios.post('/api/auth/signup', { ...signupData })
        if (res.status === 201 || 200) {
            return {
                data: res.data.encodedToken,
                msg: "Signed Up Successfully",
                errorData: [false],
            }
        }
    } catch (err) {
        console.error(err.message)
        return {
            data: "",
            msg: "Please Enter Valid Details",
            errorData: [true, err],
        }
    }
}

export { loginUser, signupUser }