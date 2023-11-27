import './App.css';
function Logo(){
  return (
   <h1>🏝️ Far Away 🧳</h1>
  )
}
function Form(){
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {
          Array.from({length:20},(_,i)=>i+1).map((num)=>{
            return (
              <option value={num} key={num}>{num}</option>
            )
          })
        }
        
      </select>
      <input type='text' placeholder='Item...'/>
      <button>Add</button>
    </form>
  )
}
function PackingList(){
  const initialItems= [
    {id:1,description:"Passports",quantity:2,packed:false},
    {id:2,description:"Socks",quantity:12,packed:true}
  ]
  return (
    <div  className='list'>
    <ul>
      {
        initialItems.map((item)=>{
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
  return (
   <div className='App'>
   <Logo/>
   <Form/>
   <PackingList/>
   <Stats/>
   </div>
  );
}

export default App;
