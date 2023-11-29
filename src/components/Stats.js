export default function Stats({lists}){
    if(!lists.length){
      return (
        <footer className='stats'>
          <em>Start adding some items to your packing list 🚀</em>
        </footer>
      )
    }
    let packed=0,packedPercentage=0
    const calculatePacked=()=>{
      for(let i=0;i<lists.length;i++){
        if(lists[i].packed){
          packed=packed+1;
  
        }
      }
    }
    calculatePacked()
    packedPercentage=Math.floor(((packed/lists.length)*100))
    return (
      <footer className='stats'>
       <em> 
        {
         packedPercentage===100.00?
         `You got everything! Ready to go ✈`: 
        `💼  You have ${lists?.length} items on your list, and you already packed ${packed} (${packedPercentage}%)`
        
       } 
       </em>
      </footer>
    )
  }