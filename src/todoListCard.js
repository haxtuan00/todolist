import React,{useRef,useState} from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
const TodoListCard = ({td,time}) => {
    const href=useRef(null)
    const [check,setCheck]=useState(false)
    const toggeDone=()=>{
        setCheck(!check)
        href.current.classList.toggle('done')
    }
  return (
        <div className="wrap" ref={href}>
            <div  className="todo-item-container">
        
              {check?<FaRegCheckCircle onClick={toggeDone}/>:<FaRegCircle onClick={toggeDone} className="item-done-button" color="#9a9a9a" />}
              <div className="item-title">{td}</div>
           </div>
              <div className="time">Còn {time} ngày</div>
        </div>
  )
}

export default TodoListCard