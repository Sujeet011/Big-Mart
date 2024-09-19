import React, { useState } from 'react';

const Item = ({ name }) => {
  console.log('Rendering:', name);
  return <div>{name}</div>;
};

const MemoizedItem = React.memo(Item);

const MemoExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <MemoizedItem name="Memoized Item 1" />
    </div>
  );
};

export default MemoExample;
