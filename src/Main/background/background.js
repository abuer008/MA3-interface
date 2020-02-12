import React from 'react';
import video from './walking_v04.mp4';
import './background.css';

export class MainVideo extends React.Component {
    render() {
        return (
            <div className="video-container">
                <video autoPlay muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        )
    }
}