
import React from 'react';
import classes from './button.module.css';

export const Button = (props) => {
    let config = {
        clicked: props.clicked,
        classNames: [classes.Button, props.classNames || ""]
    }

    switch (props.type) {
        case "EDIT":
            config = {
                ...config,
                text: "Edit"
            }
            break;
        case "CANCEL":
            config = {
                ...config,
                text: "Cancel",
                classNames: [...config.classNames, classes.Danger]
            }
            break;
        case "SAVE":
            config = {
                ...config,
                text: "Save",
                classNames: [...config.classNames, classes.Success]
            }
            break;
        default:
            config = { ...props };
    }

    if (config.classNames && Array.isArray(config.classNames)) {
        config.classNames = config.classNames.join(" ");
    }

    return (<button onClick={config.clicked} className={config.classNames}>{config.text}</button>)
};
