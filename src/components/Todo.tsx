import React, { useRef, useState } from 'react'
import List from './List';

export interface Task {
  task:string;
  done:boolean;
}
export default function Todo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const addTask= ():void => {
    // let copyArr: Task[] = [...taskList];
    if(inputRef.current !== null){
      let newTask:Task = {task:inputRef.current.value, done:false}
      setTaskList([...taskList, newTask])
    }
    };
  return (
    <>
      <input ref={inputRef} value={'typescript'}></input>
      <button onClick={addTask}>할 일 추가</button>
      {/* {taskList.map((el, idx) => (<List task={el.task} done={el.done}/>))} */}
      {taskList.map((el, idx) => (<List task={el.task} done={el.done}/>))}
    </>
  
  )
      
}
