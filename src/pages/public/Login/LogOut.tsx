
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LogOut =() =>{
	
	const { setUser } = useAuth();
	const navigate = useNavigate();
	
	// Estado para manejar qué dropdown está abierto
	const handleLogout = () => {
		// Borra contexto y localStorage
		setUser(null);
		localStorage.removeItem("token");

		// 🔑 Redirige a tu ruta protegida
		navigate("/login");
	};

	return( 
		<a onClick={handleLogout}> Cerrar Cesión</a>
	)

}