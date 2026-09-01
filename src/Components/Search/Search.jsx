import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import Sidebar from '../Sidebar/Sidebar'
import Skeleton from '../Skeleton/Skeleton'

const Search = ({ sidebar, category, setCategory }) => {
    const { query } = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchSearchResults = async () => {
        setLoading(true)
        const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${API_KEY}`
        try {
            const res = await fetch(searchUrl)
            const data = await res.json()
            setSearchResults(data.items || [])
        } catch (error) {
            console.error("Error fetching search results:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSearchResults()
    }, [query])

    return (
        <>
            <Sidebar sidebar={sidebar} category={null} setCategory={setCategory} />
            <div className={`container ${!sidebar ? "" : "large-container"}`}>
                <div className="feed">
                    {loading
                        ? Array.from({ length: 50 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))
                        : searchResults.map((item) => (
                <Link
                    key={item.id.videoId}
                    to={`/video/0/${item.id.videoId}`}
                    className="card"
                >
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}
                </div>
            </div>
        </>
    )
}

export default Search