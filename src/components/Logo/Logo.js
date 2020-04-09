import React from 'react';
import burgerLogo from '../../assets/Images/logo.png';
import classes from './logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="P's Burger" />
    </div>
);

export default logo;