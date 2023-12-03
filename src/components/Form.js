import React,{useState} from "react"
export default function Form({updateLists}){
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
        <div className="add-form-second">
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
        </div>
      </form>
    )
  }