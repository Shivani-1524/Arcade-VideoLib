import { createContext, useReducer, useContext } from "react";
import { initState, historyReducer } from "../Reducers/history-reducer";
const HistoryContext = createContext()

const HistoryProvider = ({ children }) => {
    const [historyState, historyDispatch] = useReducer(historyReducer, initState)
    return (
        <HistoryContext.Provider value={{ historyState, historyDispatch }}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext)

export { HistoryProvider, useHistory }
