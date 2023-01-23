import React from 'react'
import './todolist.css';

function ListItem(props) {
  return (
    <div className='item-list'>
      <div onClick={()=>{props.removeitem(props.index)}} className='item'><i className="fa-sharp fa-solid fa-circle-xmark"></i></div><div className='item'>{props.value}</div>
    </div>
  )
}

export default ListItem
