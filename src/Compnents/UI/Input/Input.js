
import React from 'react';
import classes from './input.module.css';

export const Input = (props) => {
    const classNames = [classes.Input, props.classNames || ""].join(" ");

    return (<input
        onClick={props.onClick}
        className={classNames}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
    />)
}

