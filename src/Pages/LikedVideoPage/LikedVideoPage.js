import React, { useEffect } from 'react'
import { fetchLikedVideos } from '../../Utils/likevideo-utils';
import { EmptyPage } from '../../Components/EmptyPage/EmptyPage'
import { useLikedVideo } from '../../Context/likevideo-provider'
import { VideoCard } from '../../Components/VideoCard/VideoCard'

const LikedVideoPage = () => {
    const { likedVideoDispatch, likedVideoState } = useLikedVideo();
    const orderedList = [...likedVideoState?.likedVideoList].reverse()
    useEffect(() => {
        (async () => {
            const { data, errorData } = await fetchLikedVideos()
            !errorData[0] ? likedVideoDispatch({ payload: data.likes, type: 'UPDATE_LIKEDLIST' }) : console.error(errorData[1])
        })()
    }, []);
    return (
        <div>
            {
                orderedList.length > 0 ?
                    <div>
                        <div className='video-layout'>
                            {orderedList.map(video =>
                                <VideoCard key={video._id} props={video} type={"like"} />)
                            }
                        </div>
                    </div>
                    :
                    <EmptyPage />
            }
        </div>
    )
}

export { LikedVideoPage }