import React from "react";
import {Animate} from "react-move";
import './schedules.css';
import SchedulesText from "./scheduleText";

export default class Schedules extends React.Component {
    render() {
        return (
            <div className="schedules-container">
                <Animate start={() => ({
                    opacity: 0,
                })}
                         enter={() => ({
                             opacity: [1],
                                 timing: {
                                 duration: 800, delay: 3000
                             },
                         })}
                >
                    {(state) => {
                        const {opacity} = state;

                        return (
                            <div>
                                <div id="schedule-black" style={{opacity: `${opacity}`}}></div>
                                <div id="schedule-white" style={{opacity: `${opacity}`}}>
                                </div>

                            </div>
                        )}}
                </Animate>
                <SchedulesText />
            </div>
        )
    }
}