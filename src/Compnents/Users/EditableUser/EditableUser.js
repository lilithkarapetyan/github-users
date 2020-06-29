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

    render() {
        if (this.state.isEditing) {
            return <UserForm
                {...this.props}
                cancelEdit={this.cancelEdit}
            />
        }
        else {
            return <User {...this.props} edit={this.edit} />
        }
    }
}
export { EditableUser };