import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'
import thumbnail1 from '../../assets/thumbnail1.png'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([])

    const fetchData = async () => {
        const currentCategory = categoryId || 0
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${currentCategory}&key=${API_KEY}`

        try {
            const res = await fetch(relatedVideo_url)
            const data = await res.json()
            setApiData(data.items || [])
        } catch (error) {
            console.error("Failed fetching recommended videos:", error)
            setApiData([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='recommended'>
            {apiData?.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet?.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img
                            src={item.snippet?.thumbnails?.medium?.url || thumbnail1}
                            alt={item.snippet?.title}
                        />
                        <div className="vid-info">
                            <h4>{item.snippet?.title} || "Untitled"</h4>
                            <p>{item.shippet?.channelTitle}</p>
                            <p>{item.statistics?.viewCount ? value_converter(item.statistics.viewCount) : "0"} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended