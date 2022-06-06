import React,{ useEffect ,useState,createContext} from 'react'
const Form = ({handleAdd}) => {
  const [values,setValues]=useState('')
  const [date,setDate]=useState(null)
  console.log(values)
  const handleSubmit=(e)=>{
      e.preventDefault()
      var time = new Date(date);
      var currentTime= new Date()
      var diff=time.getTime()-currentTime.getTime()
      var d=Math.floor(diff/24/3600/1000)
     handleAdd(values,d)
  }
  return (
    <form className="form">
      <input placeholder="Enter task ..." onChange={(e)=>setValues(e.target.value)}/>
      <input type='date' onChange={(e)=>setDate(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
