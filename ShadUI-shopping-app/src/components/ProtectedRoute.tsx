import React, { useEffect, useState } from "react";
import axiosHttp from "../axiosHandler/axiosHandler";
import { useSessionStorage } from "../Custom hook/useSessionStorage";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [role, setRole] = useState<boolean>(false);
    const {getItem} = useSessionStorage("user")
    const [user] = useState(getItem)
    

    useEffect(() => {
        async function getUserData() {
            try {
                const userData = await axiosHttp.get(`account/${user?.id}`);
                setRole(userData.data === 1);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setRole(false);
            }
        }
        getUserData();
        
    }, [user]);


    return role ? <>{children}</> : <Unauthorized />;
};

export default ProtectedRoute;

const Unauthorized: React.FC = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            Unauthorized
        </div>
    );
};
