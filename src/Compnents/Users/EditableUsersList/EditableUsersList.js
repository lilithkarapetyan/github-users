import React from 'react';
import { EditableUser } from '../EditableUser/EditableUser';
import classes from './editableUsersList.module.css';

const EditableUsersList = (props) => (
    <div className={classes.UsersList}>
        {
            props.users.map((user) => (<EditableUser
                key={user.id}
                user={user}
                editUser={props.editUser}
                cancelEdit={() => props.cancelEdit(user)}
                isEditing={user.isEditing}
                onClose={() => props.deleteUser(user)}
            />))
        }
    </div>
);

export { EditableUsersList };