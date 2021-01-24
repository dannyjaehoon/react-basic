import React from 'react'

const UserHoc = (WrappedComponent,WrappedComponent2, arg1) => {
    return (props) => (
        <>
            <WrappedComponent></WrappedComponent>
            <WrappedComponent2></WrappedComponent2>
            arg1
        </>
    )
}

export default UserHoc
