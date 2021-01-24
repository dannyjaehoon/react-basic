import React from "react";
import { Link } from 'react-router-dom';

const Adjel = () => {
    const ids = [
        {id: '1', name: 'Post 1'},
        {id: '2', name: 'Post 2'},
        {id: '3', name: 'Post 3'},
    ]
    const list = ids.map(item =>  (
        <span key={item.id}>
            <Link>{item.item}</Link><br/>
        </span>
    ))
    
    return(
        <>
            {list}
        </>
    )
}

export default Adjel

