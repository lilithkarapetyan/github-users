import React, { Component } from "react";
import { EditableUsersList } from "../../Compnents/Users";
import { getUsers } from '../../Fetch/Users';
import classes from "./usersDashboard.module.css";

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
        const newUsers = this.state.users.map(u => {
            if (u.id === user.id) {
                return {
                    ...user
                };
            }
            return u;
        })

        this.setState({
            ...this.state,
            users: newUsers
        })
    }


    render() {
        return (
            <div className={classes.UsersDashboard}>
                <h2>Gitub users</h2>
                <EditableUsersList
                    users={this.state.users}
                    editUser={this.editUser}
                />
            </div>
        )
    }
};

export default UsersDashboard;