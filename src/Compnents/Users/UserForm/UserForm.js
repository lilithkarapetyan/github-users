import React, { Component, Fragment } from 'react';
import listClasses from '../EditableUsersList/editableUsersList.module.css';
import classes from './userForm.module.css';
import { Input, Button, ButtonTypes } from '../../UI';

class UserForm extends Component {
    state = {
        user: this.props.user
    }

    onChange = (field, value) => {
        this.setState({
            user: {
                ...this.state.user,
                [field]: value
            }
        })
    }

    render() {
        const inputTypeArray = [
            { id: "login", title: "Username" },
            { id: "type", title: "User type" },
            { id: "avatar_url", title: "Avatar Url" },
            { id: "html_url", title: "Profile Url" }
        ];
        return (
            <div className={listClasses.EditableListItem}>
                <div className={classes.InputContainer}>
                    {
                        inputTypeArray.map(type => (
                            <Fragment key={type.id}>
                                <span>{type.title}</span>
                                <Input value={this.state.user[type.id]} onChange={(value) => this.onChange(type.id, value)} />
                            </Fragment>
                        ))
                    }
                </div>
                <div>
                    <Button type={ButtonTypes.Save} clicked={() => this.props.editUser(this.state.user)} />
                    <Button type={ButtonTypes.Cancel} clicked={this.props.cancelEdit} />
                </div>
            </div>
        )
    }
};

export { UserForm };