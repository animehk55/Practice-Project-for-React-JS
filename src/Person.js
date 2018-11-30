import React from 'react';

const Person = (props) => {
    return (
    <div>
        <p onClick={props.click}>Hello {props.name} your age is {props.age}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Person; 