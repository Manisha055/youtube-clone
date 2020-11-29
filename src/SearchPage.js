import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
             image="//yt3.ggpht.com/ytc/AAUvwngQbWzQEm4lhaliUR60hCEjRVEp5jFZMFW06GvzHQ=s176-c-k-c0x00ffffff-no-rj-mo"
             subs="10.5K"
             description="Documenting My Life Since 2016. Following My Passion Of Making Youtube Videos. - I Make Vlogs - I Tell Stories - I Film&nbsp;..."
             channel="Imswarnil"
             verified
             noofvideos="81"
            />

            <hr/>

            <VideoRow
                views="58 views"
                subs="10.5k"
                description=""
                timestamp="24 min"
                channel="Imswernil"
                title="Welcome To Bundelkhand - Apni Tikamgarh Or Hamao Bundelkhand - City Vlog ✓"
                image="https://i.ytimg.com/vi/6kzMirhOsT0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDxwK0U-hZ2_ILLQ3aaBNjw0SJrLA"
            />

            <VideoRow
                 subs="10.5k"
                 channel="Imswernil"
                 image="https://i.ytimg.com/vi/QGKC1JgsrFk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA2iEPOPMLsSbO7QkZpUPJOfEI9Og"
                 title="Jayadeep Dholakia Is Cool Youtuber For Software Engineer to Watch - But Why He Copied My Idea"
                 views="960 views"
                 timestamp="1 days"
             />
            

             <VideoRow
             subs="10.5k"
             channel="Imswernil"
             image="https://i.ytimg.com/vi/-DUM8AFgV6A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDeE3erb3T-PeGHCPfPhYyi7BJ8Mw"
             title="Flying Beast Inspired Me To Do This - Jspiders VS ABC - Channel Trailer 2020 - Vlog #26"
             views="1.2k views"
             timestamp="1 month"

             />

             <VideoRow
             subs="10.5k"
             channel="Imswernil"
             image="https://i.ytimg.com/vi/eEM3xC5CZ20/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBVUaYtvE9z9iEwP0lAPlUTrZ5Opg"
             title="I Worked In Startup As Web Developer - My Experience Of Startup - What Web Developer Do In Startup"
             views="33k Views" 
             timestamp="1 year ago"

             />

        </div>
    )
}

export default SearchPage
