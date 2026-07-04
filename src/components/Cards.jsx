import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank' >
        <div className='h-44 w-44 rounded-2xl overflow-hidden'>
        <img className='h-full w-full object-cover ' src={props.elem.download_url} alt=""/>
      </div>
      <h2 className='font-bold text-lg'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Cards