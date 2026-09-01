import React from 'react'
import './Sidebar.css'
import homeIcon from '../../assets/home.png'
import gameIcon from '../../assets/game_icon.png'
import automobilesIcon from '../../assets/automobiles.png'
import sportsIcon from '../../assets/sports.png'
import entertainmentIcon from '../../assets/entertainment.png'
import techIcon from '../../assets/tech.png'
import musicIcon from '../../assets/music.png'
import blogsIcon from '../../assets/blogs.png'
import newsIcon from '../../assets/news.png'
import jackIcon from '../../assets/jack.png'
import simonIcon from '../../assets/simon.png'
import tomIcon from '../../assets/tom.png'
import meganIcon from '../../assets/megan.png'
import cameronIcon from '../../assets/cameron.png'

const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
            <div className={`sidebar ${!sidebar ? "" : "small-sidebar"}`}>
                <div className="shortcut-links">
                    <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                        <img src={homeIcon} alt="" /><p>Home</p>
                    </div>
                    <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                        <img src={gameIcon} alt="" /><p>Games</p>
                    </div>
                    <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                        <img src={automobilesIcon} alt="" /><p>Automobiles</p>
                    </div>
                    <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                        <img src={sportsIcon} alt="" /><p>Sports</p>
                    </div>
                    <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                        <img src={entertainmentIcon} alt="" /><p>Entertainment</p>
                    </div>
                    <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                        <img src={techIcon} alt="" /><p>Tech</p>
                    </div>
                    <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                        <img src={musicIcon} alt="" /><p>Music</p>
                    </div>
                    <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                        <img src={blogsIcon} alt="" /><p>Blogs</p>
                    </div>
                    <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                        <img src={newsIcon} alt="" /><p>News</p>
                    </div>
                    <hr />
                </div>
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={jackIcon} alt="" /><p>Pewdiepie</p>
                    </div>
                    <div className="side-link">
                        <img src={simonIcon} alt="" /><p>MrBeast</p>
                    </div>
                    <div className="side-link">
                        <img src={tomIcon} alt="" /><p>Justin Bieber</p>
                    </div>
                    <div className="side-link">
                        <img src={meganIcon} alt="" /><p>5-Minute Crafts</p>
                    </div>
                    <div className="side-link">
                        <img src={cameronIcon} alt="" /><p>Nas Daily</p>
                    </div>
                </div>
            </div>
        )
    }

    export default Sidebar;