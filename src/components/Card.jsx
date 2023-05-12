import React from 'react'

export default function Card(props) {
  return (
    <div key={props.index} className='bg-zinc-200 shadow-md flex flex-col space-y-3 pb-4'>
        <img src={props.character.image} alt={props.character.name} />
        <h2 className='text-center font-mono'>{props.character.name}</h2>
        <button className='bg-white p-2 w-[max-content] mx-auto rounded shadow-md'>See Detail</button>
    </div>
  )
}
