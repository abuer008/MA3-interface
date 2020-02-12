import React from 'react';
// import logo from './logo.svg';
import {MainVideo} from "./background/background";
import HealthConcern from "./healthConcern/healthConcern";
import Schedules from "./schedules/schedules";
import './Main.css'

export default class Main extends React.Component {

    render() {
        return (
            <div className="Main">
                <MainVideo/>
                <HealthConcern/>
                <Schedules/>
            </div>
        );
    }
}
