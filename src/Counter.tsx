import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    );
}

export default Counter;