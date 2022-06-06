import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import React,{ useEffect ,useState,createContext} from 'react'
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  useEffect(()=>{
    const datalocal=localStorage.getItem('datas')?JSON.parse(localStorage.getItem('datas')):[]
    setTodoList(datalocal)
  },[])
  const [item,setItem]=useState({
    title:'',
    Done:'',
    time:''
  })
  const [todoList,setTodoList]=useState([])
  // const [value,setValue]=useState('')
  const handleAdd=(value,d)=>{
    // setItem({...item,title:value})
    const item={
      title:value,
      Done:'',
      time:d,
    }
    localStorage.setItem('datas',JSON.stringify([...todoList,item]))
    setTodoList([...todoList,item])
  }
  console.log(todoList)
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader length={todoList.length}/>
        <TodoList todolist={todoList}/>
        <Form handleAdd={handleAdd}/>
      </div>
      <Footer />
    </div>
  );
};