import React from 'react';
import UserHoc from '../hoc/userHoc';

const User = () => {
    return (
        <div>
            user
        </div>
    )
}
const User2 = () => {
    return (
        <div>
            user2
        </div>
    )
}

export default UserHoc(User, User2, 'hello I am')
