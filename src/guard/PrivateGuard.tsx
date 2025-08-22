import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
	const token = localStorage.getItem("token");
	console.log("soy  private USER")
	
	return token ? <Outlet/> : <Navigate to="/login" replace/>
} 
