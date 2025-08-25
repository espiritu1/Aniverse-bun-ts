import { Navigate, Outlet } from "react-router-dom";

interface User {
	userName: string;
	role: string;
	email: string;
}

export const PrivateAdmin = () => {
	const userData = localStorage.getItem("user");

	if (!userData) {
		// Si no hay user en localStorage -> redirigir a login
		return <Navigate to="/login" replace />;
	}

	const user: User = JSON.parse(userData);
	const isAdmin = user.role === "ADMIN_ROLE"; // 👈 validamos el rol
	console.log("soy  private ADMIN")
	
	return isAdmin ? <Outlet /> : <Navigate to="/private/home" replace />;
};