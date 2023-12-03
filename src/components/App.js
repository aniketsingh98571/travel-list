
import { useState,useEffect } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
function App() {
  useEffect(() => {
    function setAppHeight() {
      document.body.style.height = window.innerHeight + 'px';
    }

    window.addEventListener('resize', setAppHeight);
    window.addEventListener('load', setAppHeight);

    return () => {
      window.removeEventListener('resize', setAppHeight);
      window.removeEventListener('load', setAppHeight);
    };
  }, []);

  const [lists,setLists]=useState([])
  const updateLists=(newItem)=>{
    setLists((prevLists)=>[...prevLists,newItem])
  }
  const handleDeleteItem=(id)=>{
    setLists((prevLists)=>{
     return prevLists.filter((item)=>item.id!==id)
    })
  }
  const handleToggleItem=(id)=>{
    setLists((prevLists)=>{
     return prevLists.map((item)=>{
        if(item.id===id){
          return {...item,packed:!item.packed}
        }
        else{
          return item
        }
      })
    })
  }
  const clearListHandler=()=>{
    const confirm=window.confirm("Are you sure you want to delete all items?")
    if(confirm)
      setLists([])
  }
  return (
   <div className='App'>
   <Logo/>
   <Form updateLists={updateLists}/>
   <PackingList lists={lists} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} clearListHandler={clearListHandler}/>
   <Stats lists={lists}/>
   </div>
  );
}

export default App;
