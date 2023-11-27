import './App.css';
import { useState } from 'react';
function Logo(){
  return (
   <h1>🏝️ Far Away 🧳</h1>
  )
}
function Form({updateLists}){
  const [description,setDescription]=useState("")
  const [selectValue,setSelectValue]=useState(1)
  function handleSubmit(e){
    e.preventDefault()
    if(!description)
      return
    const newItem={
      description:description,
      quantity:selectValue,
      packed:false,
      id:Date.now()
    }
    console.log(newItem)
    updateLists(newItem)
    setDescription("")
    setSelectValue(1)
  }
  const inputTypeHandler=(e)=>{
    setDescription(e.target.value)
  }
  const selectValueHandler=(e)=>{
    setSelectValue(Number(e.target.value))
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={selectValue} onChange={selectValueHandler}>
        {
          Array.from({length:20},(_,i)=>i+1).map((num)=>{
            return (
              <option value={num} key={num}>{num}</option>
            )
          })
        }
         
      </select>
      <input type='text' value={description} onChange={inputTypeHandler} placeholder='Item...'/>
      <button>Add</button>
    </form>
  )
}
function PackingList({lists}){
  return (
    <div  className='list'>
    <ul>
      {
        lists.map((item)=>{
          return (
            <Item item={item} key={item.id}/>
          )
        })
      }
    </ul>
    </div>
  )
}
function Item({item}){
  return (
    <li>
         <span style={item.packed?{textDecoration:'line-through'}:{}}>{item.quantity}</span>
      <span>{item.description}</span>
      <button>❌</button>
    </li>
  )
}
function Stats(){
  return (
    <footer className='stats'>
      💼  You have X items on your list, and you already packed X (X%)
    </footer>
  )
}

function App() {
  const [lists,setLists]=useState([])
  const updateLists=(newItem)=>{
    const prevItems=[...lists]
    prevItems.push(newItem)
    setLists(prevItems)
  }
  return (
   <div className='App'>
   <Logo/>
   <Form updateLists={updateLists}/>
   <PackingList lists={lists}/>
   <Stats/>
   </div>
  );
}

export default App;
