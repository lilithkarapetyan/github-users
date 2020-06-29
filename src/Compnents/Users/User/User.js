import React from 'react';
import classes from './user.module.css';
import listClasses from '../EditableUsersList/editableUsersList.module.css';
import { Button, ButtonTypes } from '../../UI';

const User = (props) => (
    <div className={[classes.User, listClasses.EditableListItem].join(" ")}>
        <a href={props.user.html_url} target="_blank" rel="noopener noreferrer">
            <img src={props.user.avatar_url} alt="avatar pic" />
        </a>
        <div className={classes.Texts}>
            <h3>{props.user.login}</h3>
            <span>{props.user.type}</span>
        </div>
        {props.edit ? <Button type={ButtonTypes.Edit} clicked={props.edit} /> : ""}
    </div>
);

export { User };