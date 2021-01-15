import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const Profile = (props) => {
  return (
    <>
      <Redirect to='/'/>
      <Link to={{
        pathname: `${props.match.url}/posts`

      }}>
        posts of profile
      </Link>
    </>
  );
}

export default Profile;
