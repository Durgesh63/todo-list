import React from 'react';
import './todolist.css';
import ListItem from './ListItem';

function ToDoList(props) {
  return (
    props.input.map((value, index)=>{
        return <ListItem removeitem={props.removeitem} value={value} key={index} index={index} />
    })
  )
}

export default ToDoList
