import React, { Component } from 'react';
import { UserForm, User } from '../../Users';

class EditableUser extends Component {
    state = {
        isEditing: this.props.isEditing || false
    }

    edit = () => {
        this.setState({
            ...this.state,
            isEditing: true
        })
    }

    cancelEdit = () => {
        this.setState({
            ...this.state,
            isEditing: false
        }, () => this.props.cancelEdit());
    }

    editUser = (user) => {
        this.setState({
            ...this.state,
            isEditing: false
        }, () => this.props.editUser(user));
    }

    render() {
        if (this.state.isEditing) {
            return <UserForm
                {...this.props}
                editUser={this.editUser}
                cancelEdit={this.cancelEdit}
            />
        }
        else {
            return <User {...this.props} edit={this.edit} />
        }
    }
}
export { EditableUser };