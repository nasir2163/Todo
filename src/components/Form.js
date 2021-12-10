import React,{useState} from 'react'
import ToDoList from './ToDoList'
// import {v4 as uuidV4} from 'uuid'

const Form=()=> {
    const [input,setInput]=useState("")
    const [item,setItem]=useState([])
    
    const inputHandler=(e)=>{
        setInput( e.target.value)
        // e.deleteDefault();
        
    }
const addItem=()=>{
       setItem((oldVlaue)=>{return [...oldVlaue,input]});
     setInput("");     
}
const deleteHandler=(id)=>{
    setItem((olditem)=>{
      return  olditem.filter((arr,index)=>{
            return index !==id;
      })
    })
}
    return (
        < >
            <input type='text' value={input}
            placeholder='Enter a Todo.......' 
            className='task-input' 
            onChange={inputHandler}/>
            <button className='button-add' type='submit' onClick={addItem}>Add</button>
            <>
            {
                item.map((currentValue,index)=>{
                return(<ToDoList items={currentValue} id={index} value={index} onSelect={deleteHandler}/>)
                })}
            
            </>
        </>
    )
}

export default Form;
