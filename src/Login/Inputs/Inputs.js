import React, {useState} from "react";
import './Inputs.css';

function Inputs(props) {
    return (
        <div className="inputs" >
            <label htmlFor="name">My Name is </label>
            <input type="text" placeholder="Jane Smith"/>
            <label htmlFor="age">My Age is </label>
            <input type="number" placeholder="50 years old" />
            <label htmlFor="height">My Height is </label>
            <input type="number" placeholder="180 cm"/>
            <label htmlFor="weight">My Weight is </label>
            <input type="number" placeholder="75 kg"/>
        </div>
    )
}

export default Inputs;

