import React, { Component } from "react";
import { EditableUsersList } from "../../Compnents/Users";
import { getUsers } from '../../Fetch/Users';
import { AddButton } from '../../Compnents/UI';
import classes from "./usersDashboard.module.css";
import { v4 as uuid } from 'uuid';

class UsersDashboard extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        getUsers().then(res => this.setState({
            ...this.state,
            users: [...res.data]
        }));
    }

    editUser = (user) => {

        if (!user.login) {
            this.deleteUser(user);
            return;
        }

        const newUsers = this.state.users.map(u => {
            if (u.id === user.id) {
                return {
                    ...user
                };
            }
            return u;
        })

        this.setState({
            users: newUsers
        })
    }

    deleteUser = (user) => {
        const index = this.state.users.indexOf(user);
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1);
        this.setState({
            ...this.state,
            users: newUsers
        })
    }

    createUser = () => {
        const newUsers = [...this.state.users];
        newUsers.unshift({
            id: uuid(),
            isEditing: true
        });

        this.setState({
            ...this.state,
            users: newUsers
        })
    }

    cancelEdit = (user) => {
        if (!user.login) {
            this.deleteUser(user)
        }
    }

    render() {
        return (
            <div className={classes.UsersDashboard}>
                <h2>Gitub users</h2>
                <AddButton createUser={this.createUser} />
                <EditableUsersList
                    users={this.state.users}
                    editUser={this.editUser}
                    cancelEdit={this.cancelEdit}
                    deleteUser={this.deleteUser}
                />
            </div>
        )
    }
};

export default UsersDashboard;