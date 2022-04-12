import React, { useState, useEffect } from 'react'
import { fetchLikedVideos } from '../../Utils/likevideo-utils';
import { EmptyPage } from '../../Components/EmptyPage/EmptyPage'

const LikedVideoPage = () => {
    const [likedVideos, setlikedVideos] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await fetchLikedVideos()
            console.log(res)
        })()
    }, []);
    return (
        <div>
            {
                likedVideos.length > 0 ?
                    <div>
                        {/* <div className='video-layout'>
                            {['dwa'].map(video =>
                                <VideoCard key={video._id} props={video} type={"history"} />)}
                        </div> */}
                    </div>
                    :
                    <EmptyPage />
            }
        </div>
    )
}

export { LikedVideoPage }