import React ,{useState} from "react"
import Item from "./Item";
export default function PackingList({lists,handleDeleteItem,handleToggleItem,clearListHandler}){
  const [sortBy,setSortBy]=useState("input")
  let sortedItems;
  if(sortBy==='input'){
    sortedItems=lists
  }
  else if(sortBy==="description"){
    sortedItems=lists.slice().sort((a,b)=>a.description.localeCompare(b.description))
  }
  else if(sortBy==="packed"){
    sortedItems=lists.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
  }
    return (
      <div  className='list'>
      <ul>
        {
          sortedItems?.length>0&&
          sortedItems.map((item)=>{
            return (
              <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}/>
            )
          })
        }
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={clearListHandler}>Clear list</button>
      </div>
      </div>
    )
  }