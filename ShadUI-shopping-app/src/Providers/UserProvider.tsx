import React, { useState } from 'react'
import { UserContext } from '../Context/UserContext'

interface UserProviderInterface {
    children: React.ReactNode
}
interface UserProfileInterface {
    email : string | undefined
    sub : string | undefined
}

const UserProvider: React.FC<UserProviderInterface> = ({ children }) => {

    const [user , setUser] = useState<UserProfileInterface | undefined>(undefined)

    const setUserData = (data : UserProfileInterface | undefined)=>{
        setUser(data)
    }

    return (
        <UserContext.Provider value={{user , setUserData}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider