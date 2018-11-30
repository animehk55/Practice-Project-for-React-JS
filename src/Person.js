import React from 'react';

const Person = (props) => {
    return (
    <div>
        <p>Hello {props.name} your age is {props.age}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Person; 