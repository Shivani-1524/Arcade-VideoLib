import { createContext, useContext, useReducer } from 'react'
import { initState, watchlaterReducer } from '../Reducers/watchlater-reducer'
const WatchlaterContext = createContext()

const useWatchlater = () => useContext(WatchlaterContext)

const WatchlaterProvider = ({ children }) => {
    const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, initState);
    return (
        <WatchlaterContext.Provider value={{ watchlaterDispatch, watchlaterState }}>
            {children}
        </WatchlaterContext.Provider>
    )
}

export { WatchlaterProvider, useWatchlater }