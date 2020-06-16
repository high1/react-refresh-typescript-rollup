import React, { FC, useState, useEffect } from 'react';
import './Counter.css';
import { Button } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

const Counter: FC<{ instance: number }> = ({ instance }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c: number) => c + 1), 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="Counter">
        Counter{instance}: {count}
      </div>
      <Button
        className="custom-button"
        label="Reset counter"
        raised
        onClick={() => setCount(() => 0)}
      />
    </>
  );
};

export default Counter;
