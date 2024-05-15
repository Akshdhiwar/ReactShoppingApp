import { createContext } from "react";


interface UserProfileInterface {
    email : string | undefined
    sub : string | undefined
    id : string | undefined
}

interface User {
    user : UserProfileInterface | undefined;
    setUserData : (data: UserProfileInterface | undefined)=> void;
}

export const UserContext = createContext<User | null>(null)