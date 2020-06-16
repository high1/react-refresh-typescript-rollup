import React, { FC } from 'react';
import Counter from './Counter';

export const Internal: FC = () => (
  <div>
    <Counter instance={1} />
  </div>
);
