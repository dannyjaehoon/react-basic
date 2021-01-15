import React from 'react';


function PostItem(props) {

  return (
    <div className="PostItem">
      { props.match.params.id}
    </div>
  );
}

export default PostItem;
