import React from 'react'

const Card = ({fullName,profilePic,coverImg,intro,likesCount,postCount,viewsCount}) => {
    return (
        <div className='bg-white text-black rounded-2xl h-fit w-80 relative p-2'>
            <div className='h-38 w-full bg-red-500 rounded-xl overflow-hidden'>
                <img src={coverImg} alt="" className='w-full h-full object-cover object-center'/>
            </div>
            <div className="h-30 w-30 rounded-full bg-amber-300 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-5 border-white overflow-hidden">
                <img src={profilePic} alt="" className='w-full h-full object-cover object-center'/>
            </div>
            <div className="flex flex-col items-center justify-evenly mt-15 gap-2">
                <h1 className='font-bold text-2xl'>{fullName}</h1>
                <p className='w-full text-center font-semibold text-black/50'>{intro}</p>
                <div className='flex items-center justify-between w-full px-10 py-4 mt-2 bg-blue-100 rounded-2xl shadow-lg shadow-black/15'>
                    <div className='text-center '>
                        <h2 className='font-bold text-xl'>{likesCount}</h2>
                        <p className='text-black/50'>Likes</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>{postCount}</h2>
                        <p className='text-black/50'>Posts</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>{viewsCount}</h2>
                        <p className='text-black/50'>Views</p>
                    </div>
                </div>
                <div className="flex items-center justify-evenly w-full px-12 py-2">
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-threads-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Card
