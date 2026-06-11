import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div className='text-9xl font-bold'>Please Login</div>
    
    return <div className='text-9xl font-bold'>Welcome {user.name}</div>
}

export default Profile