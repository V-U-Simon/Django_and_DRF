import React from 'react';

const UserItem = ({ user }) => {
    return (
        <ul>
            <li> <b>username:</b> {user.username} </li>
            <li> <b>email:</b> {user.email} </li>
            <li> <b>last_name:</b> {user.last_name} </li>
            <li> <b>first_name:</b> {user.first_name} </li>
        </ul>
    );
};

const UserList = ({ users }) => {
    return (
        <div>
            <h2>Users</h2>
            {users.map((user) => <UserItem user={user} />)}
        </div>
    );
};

export default UserList;