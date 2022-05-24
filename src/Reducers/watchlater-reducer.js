
const initState = {
    watchlaterList: []
}

const watchlaterReducer = (state, { type, payload }) => {
    switch (type) {
        case "UPDATE_WATCHLATER":
            return { ...state, watchlaterList: payload }
        default:
            return state
    }
}

export { watchlaterReducer, initState }