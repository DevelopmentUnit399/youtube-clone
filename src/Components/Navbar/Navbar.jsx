import React, { useState } from 'react';
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/search/${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery('')
        }
    }

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img className="menu-icon" onClick={() => setSidebar(prev => prev === false ? true : false)} src={menuIcon} alt="" />
                <Link to='/'>
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>

            <div className="nav-middle flex-div">
                <form onSubmit={handleSearch} className="search-box flex-div">
                    <input
                        type="text"
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img src={searchIcon} alt="Search" onClick={handleSearch} style={{ cursor: 'pointer' }} />
                </form>
            </div>

            <div className="nav-right flex-div">
                <img src={uploadIcon} alt="" />
                <img src={moreIcon} alt="" />
                <img src={notificationIcon} alt="" />
                <img src={profileIcon} className="user-icon" alt="" />
            </div>
        </nav>
    )
}

export default Navbar;