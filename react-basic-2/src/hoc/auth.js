import React from 'react'

const Auth = (props) => {
    const pass = 'pass123';

    if (pass !== 'pass123') {
        return (
            <div>
                password is wrong!
            </div>
        )
    } else {        
        return props.children;
    }
}

export default Auth
