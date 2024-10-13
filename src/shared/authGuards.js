import { Navigate } from "react-router-dom";
import { getCurrentuser } from "./authService"

export const AuthGuards =({children})=>{
    const user = getCurrentuser();

    if(!user){
        return <Navigate to={'/login'} />
    }

    return children
}