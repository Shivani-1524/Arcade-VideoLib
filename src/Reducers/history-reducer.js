
const initState = {
    historyList: []
}

const historyReducer = (state, { type, payload }) => {
    switch (type) {
        case "UPDATE_HISTORY":
            return { ...state, historyList: [...payload] }
        default:
            return state
    }
}

export { historyReducer, initState }