import React from 'react'

const ToDoList=({items,onSelect,id})=> {

    

    return (
        <div >
           
             <li className='list-item'  >
                    <input type='text' value={items} className='list' />
                <div>
                    <button className="button-delete task-button" onClick={()=>{onSelect(id)}}>
                    <i className="fa fa-trash"></i>
                    </button>
                </div>
                {/* <div>
                    <button className="button-edit task-button" onClick={()=>{onSelect(id)}}>
                    <i className="fa fa-edit"></i>
                    </button>
                </div> */}
                
             </li>
             
        </div>
    )
}

export default ToDoList;
