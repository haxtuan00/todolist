import {BsSquare,BsCheckSquare} from 'react-icons/bs'
import React,{useRef,useState,useEffect} from "react";
const Header = ({length}) => {
  const [check,setCheck]=useState(false)
  const [languages,setLanguages]=useState('en')
   useEffect(()=>{
     document.getElementsByTagName('html')[0].lang=languages
   },[languages])
  const show=()=>{
    setCheck(!check)
    const doneList=document.querySelectorAll('.done')
    if(check===false){
      doneList.forEach((item)=>{
        item.style.display='none'
  })
    }
    else{
      doneList.forEach((item)=>{
        item.style.display='flex'
  })
    }
  }
  const language=()=>{
    
    if(languages=='en'){
      setLanguages('Vi')
      document.getElementsByTagName('html')[0].className='translated-ltr'
    }
    if(languages=='vi'){
      setLanguages('en')
    }

  }
    return <div className="header">You have {length} tasks left!
    <div>
    {check?<BsCheckSquare onClick={show}/>:<BsSquare onClick={show}/>}
    <span >Not finished only</span>
    <button type='submit' onClick={language}>HTML lang</button >
    </div>
    </div>;
  };
  
  export default Header;