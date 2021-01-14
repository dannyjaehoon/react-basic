import React from 'react';


const title = () => {
  console.log('1 - title')
  return(
    <>
      <h1>My app</h1>
      <hr/>
    </>
  )
}

export default React.memo(title);
