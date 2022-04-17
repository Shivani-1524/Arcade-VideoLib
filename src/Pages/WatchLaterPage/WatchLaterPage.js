import React, { useEffect } from 'react'

import { fetchWatchlaterVideos } from '../../Utils/watchlater-utils';
import { EmptyPage } from '../../Components/EmptyPage/EmptyPage'
import { useWatchlater } from '../../Context/watchlater-provider'
import { VideoCard } from '../../Components/VideoCard/VideoCard'

const WatchLaterPage = () => {
    const { watchlaterDispatch, watchlaterState } = useWatchlater();
    const orderedList = watchlaterState?.watchlaterList.reverse()
    useEffect(() => {
        (async () => {
            const { data, errorData } = await fetchWatchlaterVideos()
            !errorData[0] ? watchlaterDispatch({ payload: data.likes, type: 'UPDATE_WATCHLATER' }) : console.error(errorData[1])
        })()
    }, []);
    return (
        <div>
            {
                orderedList.length > 0 ?
                    <div>
                        <div className='video-layout'>
                            {orderedList.map(video =>
                                <VideoCard key={video._id} props={video} type={"watchlater"} />)
                            }
                        </div>
                    </div>
                    :
                    <EmptyPage />
            }
        </div>
    )
}

export { WatchLaterPage }