import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    
  // console.log(response.data);
  setUserData(response.data);
  // console.log(userData);
  }

  useEffect(() => {
    getData();
  
   
  }, [index])
  


  let printUserData = <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>LOADING. . . .</h2>
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <Cards elem={elem}/>
      </div> 
    })
  }

  return (
    <div className='bg-black min-h-screen text-white '>


      <div className='flex flex-wrap gap-y-4 gap-x-4 p-7 justify-center'>
      {printUserData}
      </div>

      <div className='flex justify-center gap-4 mt-10'>

      <button onClick={function(){if(index > 0){setIndex(index-1), setUserData([])}}} className='bg-amber-300 px-5 py-3 active:scale-95 rounded text-black font-bold cursor-pointer '>Prev</button>

      <h2 className='text-2xl font-bold'>{index}</h2>

      <button onClick={function(){setIndex(index+1),setUserData([])}} className='bg-amber-300 px-5 py-3 active:scale-95 rounded text-black font-bold cursor-pointer'>Next</button>
      </div>

    </div>
  )
}

export default App