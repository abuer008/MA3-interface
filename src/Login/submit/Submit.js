import React from "react";
import NodeGroup from "react-move/NodeGroup";
import Inputs from "../Inputs/Inputs";
import {easeCubicInOut} from "d3-ease";
import './Submit.css';

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false,
            inputList: [
                {id: 1, forName: "name", nameText: "My Name is ", type: "text", placeholderText: "Jane Smith", inputValue: ""},
                {id: 2, forName: "age", nameText: "My Age is ", type: "number", placeholderText: "50 years old"},
                {
                    id: 3,
                    forName: "height",
                    nameText: "My Height is ",
                    type: "number",
                    placeholderText: "180 cm"
                },
                {id: 4, forName: "weight", nameText: "My Weight is ", type: "number", placeholderText: "75 kg"}
            ]
        }
    }

    handleSubmit = (e) => {
        this.setState({isSubmit: true, inputList: [{id:1, welcomeText: `Dear ${e.target.value}`}]})
    }

    render() {
        return (
            <div className="inputlist-container" >
                <NodeGroup data={this.state.inputList}
                           keyAccessor={d=>d.id}
                           start={() => ({
                               opacity: 1,
                           })}
                           update={(d) => ({
                               opacity: [0],
                               timing: {delay: 1000, duration: 1000, ease: easeCubicInOut },
                           })} >
                    {nodes => (
                        <div id="submit">
                            {nodes.map(({key, data, state}) => (
                                <Inputs key={key} data={data} state={state}/>
                            ))}
                        </div>
                    )}
                </NodeGroup>
            </div>
        )
    }
}

export default class Submit extends React.Component {
    render() {
        return (
            <div className="submit-container">
                <InputList />
                <input type="submit" value="Submit"  />
            </div>
        )
    }
}