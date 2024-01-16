import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [myNum, setMyNum] = useState(0);
    useEffect(() => {
        document.title =`Chats(${myNum})`;
    });

    return (
        <>
            <div>
                <p>number: {myNum}</p>
                <button onClick={() => setMyNum(myNum + 1)}>Increment</button>
            </div>
        </>
    )
}

export default UseEffect;