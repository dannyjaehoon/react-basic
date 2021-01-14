import React, { useState, useEffect } from 'react';
import Post from './posts';

function App({initialCount}) {
  // let [count, setCount] = useState(initialCount);
  let [state, setState] = useState({
    count: initialCount,
    name: 'Francis'
  });

  let [posts, setPosts] = useState([
    {
      name: 'awesome pos',
      body: 'The content of the post'
    },
    {      
      name: 'bad post',
      body: 'No content'
    }
  ])

  const addOne = () => {
    setState({...state, count: state.count + 1});
  }

  const restOne = () => {
    setState({...state, count: state.count - 1});
  }

  const reset = () => {
    setState({...state, count: initialCount});
  }
  

  const addOnePost = () => {
    let newPost = {
      name: 'very good post',
      body: 'No content at this time'
    }

    setPosts([...posts, newPost])
  }
  const removePost = () => {
    setPosts([]);
  }
  useEffect(() => {
    console.log('change on state');
  }, [state])

  useEffect(() => {
    console.log('mount');
  }, [])


  return (

    <>
      <div className="App">
        <h2>{state.name}</h2>
        <h3> Count : {state.count}</h3>
        <button onClick={() => addOne() }>Add one</button>
        <button onClick={ restOne }>Rest one</button>
        <button onClick={ reset }>Reset</button>
      </div>

      <hr/>
      <button onClick={ addOnePost }>Add one post</button>
      <button onClick={ removePost }>remove one post</button>
      { posts.map((item, i) => (
        <Post item={item} key={i}/>
      ))}
    </>
  );
}

// export default App;
