import { Navigate, Route } from "react-router-dom"
import { Home } from "./Home"
import { RoutesWithNotFound } from "../../../components/RoutesWithNotFound/RoutesWithNotFound"
import { Perfil } from "./Perfil"


export const PrivateRouter = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to="home"/>}/>
			<Route path="/home" element={<Home/>}/>
			{/* <Route path="/admin" element={<Admin/>}/> */}
			<Route path="/perfil" element={<Perfil/>}/> */


	{/* 		<Route path="/user" element={<Home/>}/>
			<Route path="/about" element={<Home/>}/> */}
		</RoutesWithNotFound>
	)
}
// en este documento se puede agregar todas las rutas provivadas qeu se necesiten 
// ya uqe esta ente dentro de un guard