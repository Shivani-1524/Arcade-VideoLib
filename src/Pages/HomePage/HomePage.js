import React, { useEffect, useState } from 'react'
import { VideoCard } from '../../Components/VideoCard/VideoCard'
import { CategoryChip } from './HomeComponent/CategoryChip'
import { fetchVideos } from '../../Utils/fetch-videolist'
import './homepage.css'


const HomePage = () => {
    const [videoList, setvideoList] = useState([]);
    useEffect(() => {
        (async () => {
            const { data, errorData } = await fetchVideos();
            !errorData[0] ? setvideoList(data) : console.log(errorData[1])
        })()
    }, []);

    const categoryList = [
        { title: 'All', lableFor: 'all' }, { title: 'New Updates', lableFor: 'updates' }, { title: 'Montages', lableFor: 'montages' }, { title: 'Funny Clips', lableFor: 'funny' }, { title: 'Tournamnets', lableFor: 'tournaments' },]

    return (
        <div className="explore-container">
            <div className="hero-section center-items">
                <h1 className='center-txt'>THE <span className='violet-txt'>VIDEO GAMING </span> ARCHIVE</h1>
            </div>
            <div className="categories-container">
                {categoryList.map((category, index) => <CategoryChip key={index} props={category} />)}
            </div>
            <div className='explore-video-layout'>
                {videoList.map(video => <VideoCard key={video._id} props={video} />)}
            </div>
        </div>

    )
}

export { HomePage }