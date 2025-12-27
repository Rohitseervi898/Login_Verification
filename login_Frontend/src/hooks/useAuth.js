import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.js";

export function useAuth(){
    return useContext(AuthContext);
}