import React from 'react';
import classes from './button.module.css';

export const AddButton = (props) => (
    <span className={classes.Add} onClick={props.createUser}>
        &#43;
    </span>
);