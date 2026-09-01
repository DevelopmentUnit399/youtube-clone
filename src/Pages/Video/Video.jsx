import React, { useEffect, useState } from 'react';
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
    const [theaterMode, setTheaterMode] = useState(false)
    const { categoryId } = useParams()
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [theaterMode])

    return (
        <div className={`play-container ${theaterMode ? 'theater' : ''}`}>
            <PlayVideo theaterMode={theaterMode} setTheaterMode={setTheaterMode} />
            <Recommended />
        </div>
    )
}

export default Video;