import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
   
    return (
        <div className="person">
            <p onClick={props.click}>i am {props.name} and i am {props.age} year old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;