
import React from 'react';
import classes from './button.module.css';

export const CloseButton = (props) => (
    <span onClick={props.onClose} className={classes.Close}>
        &times;
    </span>
);