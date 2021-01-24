import React, { useState } from 'react';

const PureCompF = () => {
    const [name, setName] = useState('Francis');
    return(
        <>
            <h3>{name}</h3>
            <button onClick={
                () => setName({name: 'Lisa'})
            }>Click to change</button>
        </>
    )
}

export default PureCompF