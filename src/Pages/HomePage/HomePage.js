import React, { useEffect, useState } from 'react'
import { VideoCard } from '../../Components/VideoCard/VideoCard'
import { CategoryChip } from './HomeComponent/CategoryChip'
import { fetchVideos } from '../../Utils/fetch-videolist'
import './homepage.css'
import { useCategory } from '../../Context/category-provider'
import { PlaylistModal } from '../../Components/PlaylistModal/PlaylistModal'
import { usePlaylist } from '../../Context/playlist-provider'


const HomePage = () => {
    const [videoList, setvideoList] = useState([]);
    const [whiteBg, setWhiteBg] = useState(false)
    const [searchVal, setSearchVal] = useState('')
    const { videoCategory } = useCategory()
    const { togglePlaylistModal } = usePlaylist()
    useEffect(() => {
        (async () => {
            const { data, errorData } = await fetchVideos();
            !errorData[0] ? setvideoList(data) : console.log(errorData[1])
        })()
    }, []);

    const categoryList = [
        { title: 'All', lableFor: 'all' }, { title: 'New Updates', lableFor: 'updates' }, { title: 'Montages', lableFor: 'montages' }, { title: 'Funny Clips', lableFor: 'funny' }, { title: 'Tournaments', lableFor: 'tournaments' },]

    return (
        <div>
            {/* {togglePlaylistModal && <PlaylistModal />} */}
            <div className="hero-section center-items">
                <h1 className='center-txt'>THE <span className='violet-txt'>VIDEO GAMING </span> ARCHIVE</h1>
            </div>
            <div className="center-items">
                <div className={whiteBg ? "nav-search-bar hide-sm mg-t-20 bg-white" : "nav-search-bar hide-sm mg-t-20"}>
                    <input onChange={(e) => setSearchVal(e.target.value)} defaultValue={searchVal} onFocus={() => setWhiteBg(true)} onBlur={() => setWhiteBg(false)} className="search-bar" type="text" placeholder="Search For Videos..." />
                    <i className="fa fa-brands fa-searchengin"></i>
                </div>
            </div>

            <div className="categories-container">
                {categoryList.map((category, index) => <CategoryChip key={index} props={category} />)}
            </div>
            <div className='video-layout'>
                {videoList.filter(video =>
                    video.title.toLowerCase().includes(searchVal.toLowerCase()))
                    .map(video => {

                        if (videoCategory === video.category || videoCategory === "All") {
                            return <VideoCard key={video._id} props={video} type='default' />
                        }
                        return null
                    })}
            </div>
        </div>
    )
}

export { HomePage }