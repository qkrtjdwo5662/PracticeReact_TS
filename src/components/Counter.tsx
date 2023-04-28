import React, { useState } from 'react'

export default function Counter() {
  const[count, setCount] = useState<number>(0);
  console.log('?');
  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={() => setCount((cur : number) => cur+1)}>쁘라스</button>
      <button onClick={() => setCount((cur : number) => cur-1)}>마이나스</button>
    </>   
  )
}
