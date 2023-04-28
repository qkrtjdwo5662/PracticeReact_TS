import React from 'react'
import { Task } from './Todo'
export default function List({task, done}: Task) {
  return (
    <>
      <h2>할일 : {task}</h2>
      <h2>했나? : {done}</h2>
    </>
    
  )
}
