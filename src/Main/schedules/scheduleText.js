import React from "react";
import Lottie from 'lottie-react-web';
import Snap from './jsonAnima/snap_head.json';

export default class SchedulesText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: true
        }
    }

    timeHandle() {
        return setInterval(()=>{
            this.setState({isStopped: false})
        }, 5000)
    }

    render() {
        return (
            <div className="schedule-text-head">
            <Lottie options={{
                animationData: Snap,
                loop: false,
            }}  />
            </div>
        )
    }
}