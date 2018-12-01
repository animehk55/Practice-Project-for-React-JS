import React from 'react';
import Bur from '../../hoc/Bur';
import './Layout.css';
// import classes from './Layout.css';

const layout = (props) => (
    <Bur>
        <div>Toolbar </div>
        <main className="top">
            {props.children}
        </main>
    </Bur>
);

export default layout;