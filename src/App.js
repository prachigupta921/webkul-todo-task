import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo]=useState()
  const [item,setitem]=useState([]);

  const additem=()=>{
		setitem([...item, todo]);
		setTodo("");
	}

  const deleteitem=(id)=>{
    console.log(id,"ii");
    let del=item.filter((it,index)=>{
			return index !=id;
		})
		setitem(del);
  }

  return (
    <div className="App">
     todo
    <div style={{marginBottom:"50px"}}>
    <input value={todo} onChange={e=>setTodo(e.target.value)}/>
     <button onClick={additem}>Add</button>
    </div>

     {item.map((res,i)=>{
      return(
       <>
        <div style={{backgroundColor:"#fff",color:"black",width:"250px",margin:"auto", boxSizing:"border-box"}}>{res}
        <button style={{marginLeft:"20px"}} onClick={()=>deleteitem(i)}>Delete</button>
        </div>
       </>
      )
     })}
    </div>
  );
}

export default App;
