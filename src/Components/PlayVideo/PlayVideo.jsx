import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import likeIcon from '../../assets/like.png'
import dislikeIcon from '../../assets/dislike.png'
import shareIcon from '../../assets/share.png'
import saveIcon from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = ({ theaterMode, setTheaterMode }) => {

    const { videoId } = useParams()

    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [commentData, setCommentData] = useState(null)

    const fetchVideoData = async () => {
        // Fetching Video Data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        // Guard clause: stop execution if apiData hasn't loaded yet
        if (!apiData) return

        // Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        // Fetching Comment Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    useEffect(() => {
        fetchOtherData()
    }, [apiData])

    return (
        <div className='play-video'>
            <div className="iframe-wrapper">
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>

            <button
                className="theater-btn"
                onClick={() => setTheaterMode(prev => !prev)}
            >
                {theaterMode ? 'Default View' : 'Theater Mode'}
            </button>

            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span>
                        <img src={likeIcon} alt="" /> {apiData ? value_converter(apiData.statistics.likeCount) : ""}
                    </span>
                    <span>
                        <img src={dislikeIcon} alt="" />
                    </span>
                    <span>
                        <img src={shareIcon} alt="" /> Share
                    </span>
                    <span>
                        <img src={saveIcon} alt="" /> Save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : ""} Comments</h4>
                {commentData?.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={likeIcon} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislikeIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayVideo