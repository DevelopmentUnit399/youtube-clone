import React from 'react'
import './Skeleton.css'

const Skeleton = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-thumbnail"></div>
            <div className="skeleton-details">
                <div className="skeleton-avatar"></div>
                <div className="skeleton-text-group">
                    <div className="skeleton-text title"></div>
                    <div className="skeleton-text subtitle"></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton