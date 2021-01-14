import React, { useState, useCallback } from 'react';
import Title from './component/title';
import Count from './component/count';
import CountBtn from './component/countBth';
import Age from './component/age';
import AgeBtn from './component/ageBth';

const App = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  
  const handleCount = useCallback(() => {
    setCount(count+1);
  },[count]);

  const handleAge = useCallback(() => {
    setAge(age+1);
  },[age]);

  
  return(
    <>
      <Title></Title>
      <Count count={ count }></Count>
      <CountBtn handleCount={ handleCount }></CountBtn>
      <Age age={ age }></Age>
      <AgeBtn handleAge={ handleAge }></AgeBtn>
    </>
  )
}

// export default App;
