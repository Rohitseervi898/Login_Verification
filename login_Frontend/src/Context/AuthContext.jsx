import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [user,setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    return (
        <AuthContext.Provider value={{user,setUser,accessToken,setAccessToken,refreshToken,setRefreshToken}} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}