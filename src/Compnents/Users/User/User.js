import React from 'react';
import classes from './user.module.css';
import listClasses from '../EditableUsersList/editableUsersList.module.css';
import { Button, ButtonTypes, CloseButton } from '../../UI';
import noPic from '../../../Assets/no-profile-pic.svg';

const User = (props) => (
    <div className={[classes.User, listClasses.EditableListItem].join(" ")}>
        <CloseButton onClose={props.onClose}/>
        <a href={props.user.html_url} target="_blank" rel="noopener noreferrer">
            <img src={props.user.avatar_url || noPic} alt="avatar pic" />
        </a>
        <div className={classes.Texts}>
            <h3>{props.user.login}</h3>
            <span>{props.user.type}</span>
        </div>
        {props.edit ? <Button type={ButtonTypes.Edit} clicked={props.edit} /> : ""}
    </div>
);

export { User };