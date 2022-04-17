
const initState = {
    likedVideoList: []
}
const likeVideoReducer = (state, { type, payload }) => {
    switch (type) {
        case 'UPDATE_LIKEDLIST':
            return { ...state, likedVideoList: payload }
        default:
            return state
    }
}

export { initState, likeVideoReducer }