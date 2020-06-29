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

    editUser = (id, user) => {
        console.log(`the user with id ${id} is replaced with `, user);
    }

    onChange = (id, field, value) => {
        const newUsers = this.state.users.map(user => {
            if (user.id == id) {
                return {
                    ...user,
                    [field]: value
                };
            }
            return user;
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
                    onChange={this.onChange} />
            </div>
        )
    }
};

export default UsersDashboard;