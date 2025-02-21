import React from 'react'
import './VideoRow.css';

function VideoRow(
    {
        views,
        subs,
        description,
        timestamp,
        channel,
        title,
        image
    }
) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow_text">
                 <h3>{title}</h3>
                <p className="videoRow__headLine">
                    {channel}.{subs} Subscriber {views} views . {timestamp}
                </p>
                <p className="videoRow__description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
