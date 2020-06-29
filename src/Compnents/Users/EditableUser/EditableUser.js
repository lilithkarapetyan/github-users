import React, { Component } from 'react';
import { UserForm, User } from '../../Users';

class EditableUser extends Component {
    state = {
        isEditing: false
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
        })
    }

    editUser = (user) => {
        this.props.editUser(user);
        this.cancelEdit();
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