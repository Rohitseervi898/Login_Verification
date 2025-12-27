import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

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