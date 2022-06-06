import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import React,{useRef,useState,useEffect} from "react";
import TodoListCard from "./todoListCard";
const TodoList = ({todolist}) => {
  return (
    <div className="todo-list-container">
       {todolist.map((td)=>{
           return <TodoListCard time={td.time} td={td.title}/>
       })}
    </div>
  );
};

export default TodoList;