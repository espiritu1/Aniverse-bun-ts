import { Navigate, Route } from "react-router-dom"
import { Dashboard } from "./DashBoard"
import { RoutesWithNotFound } from "../../components/RoutesWithNotFound/RoutesWithNotFound"
export const PrivateRouter = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to="dashboard"/>}/>
			<Route path="/dashboard" element={<Dashboard/>}/>
			<Route path="/user" element={<Dashboard/>}/>
			<Route path="/about" element={<Dashboard/>}/>
		</RoutesWithNotFound>
	)
}
// en este documento se puede agregar todas las rutas provivadas qeu se necesiten 
// ya uqe esta ente dentro de un guard