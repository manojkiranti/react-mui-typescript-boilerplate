import { FC, ReactElement, ReactNode} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedProps {
    redirectPath?:string,
    children?: ReactNode
    
}

import { useAppSelector } from "../../store/store";

const ProtectedRoute:FC<ProtectedProps> = ({ redirectPath="/login", children}) => {
    const { isLoggedIn } = useAppSelector(state => state.auth);
    if(!isLoggedIn) {
        return <Navigate to={redirectPath} />
    }
    return children||<Outlet />
}

export default ProtectedRoute

