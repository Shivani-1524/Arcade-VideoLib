import { createContext, useContext, useReducer } from 'react'
import { initState, likeVideoReducer } from '../Reducers/likevideo-reducer'

const LikedVideoContext = createContext()

const LikedVideoProvider = ({ children }) => {
    const [likedVideoState, likedVideoDispatch] = useReducer(likeVideoReducer, initState)
    return (
        <LikedVideoContext.Provider value={{ likedVideoDispatch, likedVideoState }}>
            {children}
        </LikedVideoContext.Provider>
    )
}

const useLikedVideo = () => useContext(LikedVideoContext)

export { LikedVideoProvider, useLikedVideo }