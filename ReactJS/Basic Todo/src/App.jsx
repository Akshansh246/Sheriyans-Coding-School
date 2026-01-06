import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {
    const [username, setUsername] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userDesc, setUserDesc] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    
    function submitHandler(e){
        e.preventDefault()
        let oldUsers = [...allUsers]
        oldUsers.push({username, imageURL, userRole, userDesc})
        setAllUsers(oldUsers)
        console.log(allUsers)

        setUsername('')
        setImageURL('')
        setUserRole('')
        setUserDesc('')
    }

    function deleteHandler(idx){
        let copyUsers = [...allUsers]
        copyUsers.splice(idx, 1)
        setAllUsers(copyUsers)
    }
    return (
        <div className=' h-screen text-white bg-black'>
            <form className='flex flex-wrap gap-3 p-5' onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                <input 
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                type="text" 
                placeholder='Enter Name'
                className='border border-white px-5 py-2 lg:w-[48%] w-full text-xl rounded-lg'
                />
                <input 
                value={imageURL}
                onChange={(e)=>{
                    setImageURL(e.target.value)
                }}
                type="text" 
                placeholder='Enter Image URL'
                className='border border-white px-5 py-2 lg:w-[48%] w-full text-xl rounded-lg'
                />
                <input 
                value={userRole}
                onChange={(e)=>{
                    setUserRole(e.target.value)
                }}
                type="text" 
                placeholder='Enter Role'
                className='border border-white px-5 py-2 lg:w-[48%] w-full text-xl rounded-lg'
                />
                <input 
                value={userDesc}
                onChange={(e)=>{
                    setUserDesc(e.target.value)
                }}
                type="text" 
                placeholder='Enter Description'
                className='border border-white px-5 py-2 lg:w-[48%] w-full text-xl rounded-lg'
                />
                <button className='w-[97%] bg-amber-500 py-3 text-xl rounded-lg mt-5 active:scale-95 cursor-pointer' type='submit'>Create User</button>
            </form>
            <div className='px-5 py-10 flex flex-wrap gap-5'>
                {allUsers.map((elem, idx)=>{
                    return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
                })}
            </div>
        </div>
    )
}

export default App
