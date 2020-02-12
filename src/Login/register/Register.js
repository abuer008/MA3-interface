import React from "react";
import backgroundVideo from './loginBackground_1.mp4';

export default class RegisterVideo extends React.Component {
    render() {
        const registerVideoStyle = {
            position: `absolute`,
            width: `1366px`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            overflow: `hidden`,
            margin: 0,
            padding: 0,
            border: `transparent`,
            zIndex: `-1`,
        }

        return (
            <div className="register-video" style={registerVideoStyle}>
                <video autoPlay loop muted style={{width: `100%`}}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
        )
    }
}