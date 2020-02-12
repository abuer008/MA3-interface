import React from "react";
import {Animate} from "react-move";
import './healthConcern.css'

export default class HealthConcern extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagesSrc: './public/index.html'
        }
    }
    render() {
        return (
            <div className="health-concern">
                <Animate start={
                    () => ({
                        opacity: 0,
                    })
                }

                         enter={() => ({
                             opacity: [1],
                             timing: {duration: 2000, delay: 2000},
                         })}
                >
                    {(state) => {
                        const {opacity} = state;

                        return (
                            <div style={{
                                opacity: `${opacity}`,
                            }}>
                                <h2>HEALTH CONCERNS</h2>
                                <p>This is a placeholder, This is a placeholder.</p>
                            </div>

                        )
                    }}
                </Animate>
            </div>
        )
    }
}