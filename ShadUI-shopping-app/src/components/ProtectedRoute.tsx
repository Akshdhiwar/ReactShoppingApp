import React, { useContext, useEffect, useState } from "react";
import axiosHttp from "../axiosHandler/axiosHandler";
import { UserContext } from "../Context/UserContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const currentUser = useContext(UserContext);
    const [role, setRole] = useState<boolean>(false);

    useEffect(() => {
        async function getUserData() {
            try {
                const userData = await axiosHttp.get(`account/${currentUser?.user?.id}`);
                setRole(userData.data === 1);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setRole(false);
            }
        }
        getUserData();
    }, [currentUser]);


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
