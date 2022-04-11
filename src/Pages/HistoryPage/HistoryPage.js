import React, { useEffect } from 'react'
import { useHistory } from '../../Context/history-provider'
import { fetchUserHistory, clearHistory } from '../../Utils/history-utils'
import { VideoCard } from '../../Components/VideoCard/VideoCard'
import { EmptyPage } from '../../Components/EmptyPage/EmptyPage'
import './historypage.css'

const HistoryPage = () => {
    const { historyState, historyDispatch } = useHistory()
    const orderedHistory = [...historyState.historyList].reverse()
    const handleHistoryClearAll = async () => {
        const { data, errorData } = await clearHistory()
        !errorData[0] ? historyDispatch({ type: "UPDATE_HISTORY", payload: data }) : console.error(errorData[1])
    }

    useEffect(() => {
        (async () => {
            const { data, errorData } = await fetchUserHistory()
            !errorData[0] ? historyDispatch({ type: "UPDATE_HISTORY", payload: data.history }) : console.log(errorData[1])
        })()
    }, []);


    return (
        <div>
            {
                orderedHistory.length > 0 ?
                    <div>
                        <button onClick={handleHistoryClearAll} className="btn danger-btn solid clear-btn">CLEAR ALL</button>
                        <div className='video-layout'>
                            {historyState && orderedHistory.map(video =>
                                <VideoCard key={video._id} props={video} type={"history"} />)}
                        </div>
                    </div>
                    :
                    <EmptyPage />
            }
        </div>


    )
}

export { HistoryPage }