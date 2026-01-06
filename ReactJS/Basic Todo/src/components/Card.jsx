import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white lg:w-80 md:w-80 sm:w-full rounded-2xl flex flex-col items-center text-black'>
            <img className='h-42 w-42 rounded-b-full object-cover object-center' src={props.elem.imageURL} alt="" />
            <div className="flex flex-col items-center py-5 px-10">
                <h1 className='text-2xl font-semibold'>{props.elem.username}</h1>
                <h3 className='text-amber-400 text-xl'>{props.elem.userRole}</h3>
                <p className='text-sm leading-tight mt-6'>{props.elem.userDesc}</p>
                <button className='bg-red-800 text-white py-2 w-full rounded-2xl mt-8 active:scale-95 cursor-pointer'
                onClick={()=>{
                    props.deleteHandler(props.idx)
                }}
                >Remove</button>
            </div>
        </div>
    )
}

export default Card
