
import React from 'react';
import classes from './input.module.css';

export const Input = (props) => {
    const config = {
        clicked: props.clicked,
        classNames: [classes.Input, props.classNames || ""],
        placeholder: props.placeholder,
        value: props.value || ""
    }


    if (config.classNames && Array.isArray(config.classNames)) {
        config.classNames = config.classNames.join(" ");
    }

    return (<input
        onClick={config.onClick}
        className={config.classNames}
        placeholder={config.placeholder}
        value={config.value}
        onChange={(event) => props.onChange(event.target.value)}
    />)
};
