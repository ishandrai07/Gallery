import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    
  // console.log(response.data);
  setUserData(response.data);
  console.log(userData);
  
  }

  return (
    <div className='bg-black h-screen text-white'>
      <button onClick={getData} className='bg-amber-300 active:scale-95 px-6 py-3 rounded'>Click</button>
    </div>
  )
}

export default App