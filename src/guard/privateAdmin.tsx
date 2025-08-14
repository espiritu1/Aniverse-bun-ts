import { Navigate, Outlet } from "react-router-dom";

export const PrivateAdmin = () => {
	const token = localStorage.getItem("token");

	return token ? <Outlet/> : <Navigate to="/admin" replace/>
} 

//se puede crear otro de esto para ver si la prsona es admin o no
// export const AdminGuard = () => {

// 	cosnt isAdmin = true
// 	return isAdmin ? <Outlet/> : <Navigate to="/dashboard" replace/>z