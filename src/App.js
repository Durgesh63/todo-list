
import './App.css';
import './components/todolist.css';
import ToDoList from './components/toDoList';
import React ,{useState} from 'react';
import {Route, Routes} from "react-router-dom";


function App() {

  const [input, setinput] = useState('');
    const inputvalue = (elemt)=>{
        setinput(elemt.target.value)
    }

    const [setvalue, setsetvalue] = useState([]);
    const getvalue = (e)=>{
        e.preventDefault()
        if(input.length > 0){
            setsetvalue((prevValue)=>{
                return [...prevValue,input?input:"No any value"]
            })
         }
        // reset from data
        setinput("")
    }

    const removeitem = (index)=>{
        setvalue.splice(index,1)
        setsetvalue(()=>{
            return [...setvalue];
        })
        
    }

  return (
    <>
  <Routes >
  <Route path='/todo-list/' element = {
      <>
          <div className='bg-color'>
            <div className='outercart'>
                  <div className='card'>
                    <div className='strip'>To Do List </div>
                    <form onSubmit={getvalue}>
                      <input type="text" placeholder='Add a item' name='input' value={input} onChange={inputvalue} /> <button className='plus-icon'><i className="fa-solid fa-circle-plus "></i></button>
                    </form>
                    
                    <div>
                      <ToDoList removeitem={removeitem} input={setvalue}/>
                    </div>
                  </div>
              </div>
          </div>
      </>
      } />
  </Routes >

    </>
  );
}

export default App;
