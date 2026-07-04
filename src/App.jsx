import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=14')
    
  console.log(response.data);
  setUserData(response.data);
  // console.log(userData);
  }

  let printUserData = "No User Available"
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){

      return <div>
        <div className='h-44 w-44'>
        <img className='h-full w-full object-cover rounded-2xl' src={elem.download_url} alt=""/>
      </div>
      <h2>{elem.author}</h2>
      </div> 
    })
  }

  return (
    <div className='bg-black min-h-screen text-white'>
      <button onClick={getData} className='bg-amber-300 active:scale-95 px-6 py-3 rounded-xl'>Click</button>

      <div className='flex flex-wrap gap-y-4 gap-x-4'>
      {printUserData}
      </div>

    </div>
  )
}

export default App