import { Navigate, Route } from "react-router-dom"
import { Admin } from "./admin/Admin"
import { RoutesWithNotFound } from "../../../components/RoutesWithNotFound/RoutesWithNotFound"

export const PrivateRouterAdmin = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to="Admin"/>}/>
			<Route path="/admin" element={<Admin/>}/>
			
		</RoutesWithNotFound>
	)
}