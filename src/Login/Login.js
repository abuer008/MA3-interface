import React from "react";
import RegisterVideo from "./register/Register";
import {Animate} from "react-move";
import {easeCubicInOut} from "d3-ease";
import './submit/Submit.css';
import './Inputs/Inputs.css';

const inputList = [
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
];


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false,
            inputList: inputList,
            nameValue: ""
        };
        this.handleNameValue = this.handleNameValue.bind(this);
    }

    onSubmit = () => {
        this.setState({isSubmit: true})
    }

    handleNameValue = (e) => {
        this.setState({nameValue: e.target.value})
    }

    render() {
        return (
            <Animate show={!this.state.isSubmit} start={{
                opacity: 1
            }} leave={[{
                opacity: [1],
                timing: {duration: 1000, delay: 500, ease: easeCubicInOut}
            }, {
                opacity: [0],
                timing: {duration: 1000, delay: 500, ease: easeCubicInOut}
            }]} >
                {({opacity}) => {
                        return (
                            <div className="login-container" style={{opacity}}>

                                <div className="submit-container" >
                                    <div id="submit">
                                        <div className="inputs" >
                                            <label htmlFor="name">My Name is </label>
                                            <input type="text" placeholder="Jane Smith" onChange={this.handleNameValue}/>
                                        </div>
                                        <div className="inputs">
                                            <label htmlFor="age">My Age is </label>
                                            <input type="number" placeholder="50 years old" />
                                        </div>
                                        <div className="inputs">
                                            <label htmlFor="height">My Height is </label>
                                            <input type="number" placeholder="180 cm"/>
                                        </div>
                                        <div className="inputs">
                                            <label htmlFor="weight">My Weight is </label>
                                            <input type="number" placeholder="75 kg"/>
                                        </div>

                                    </div>
                                    <input type="submit" value="Submit" onClick={this.onSubmit}/>
                                </div>
                                <RegisterVideo />
                            </div>
                        )

                }}
            </Animate>
        )
    }
}

export default Login;
