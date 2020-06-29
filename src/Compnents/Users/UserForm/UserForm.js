import React from 'react';
import listClasses from '../EditableUsersList/editableUsersList.module.css';
import classes from './userForm.module.css';
import { Input, Button, ButtonTypes } from '../../UI';

const UserForm = (props) => (
    <div className={listClasses.EditableListItem}>
        <div className={classes.InputContainer}>
            <span>Username</span>
            <Input value={props.user.login} onChange={(value) => props.onChange("login", value)}/>
            <span>User type</span>
            <Input value={props.user.type} onChange={(value) => props.onChange("type", value)}/>
            <span>Avatar Url</span>
            <Input value={props.user.avatar_url} onChange={(value) => props.onChange("avatar_url", value)}/>
            <span>Profile Url</span>
            <Input value={props.user.html_url} onChange={(value) => props.onChange("html_url", value)}/>
        </div>
        <div>
            <Button type={ButtonTypes.Save} clicked={() => props.editUser(props.user.id)}/>
            <Button type={ButtonTypes.Cancel} clicked={props.cancelEdit}/>
        </div>
    </div>
);

export { UserForm };