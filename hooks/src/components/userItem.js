import React, { useContext } from 'react';
import { MyContext } from '../context/index';


const UserItem = () => {
  const context = useContext(MyContext);
  console.log(context);
  return(
    <>
      {context.active ? context.users.map(user => {
        return <div key={user.id}>
          <div>Name : {user.name}</div>
        </div>
      }): null}
      <button onClick={context.toggleActive}>
        Toggle it
      </button>
    </>
  )
}

export default React.memo(UserItem);
