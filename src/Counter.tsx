import React , { FC, useState, useEffect } from 'react';
import './Counter.css';

const Counter: FC<{ instance: number} > = ({ instance }) => {
    let [ count, setCount ] = useState(0);

    useEffect(() => {
        let interval = setInterval(() =>
            setCount((c: number) => c + 1), 200);

        return () => clearInterval(interval)
    }, []);

    return <div className="Counter">Counter{instance}: {count}</div>
}

export default Counter;
