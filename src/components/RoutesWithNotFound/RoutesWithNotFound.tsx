import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface Props {
	children: ReactNode
}

export const RoutesWithNotFound = ({children}:Props) => {
	
	return(
		<Routes>
			{children}
			<Route path='*' element={<Navigate to="/404" />}/>
			<Route path='404' element={ <div>
			 								<h1>pagina no encontrada </h1>
				<p style={{ color: "gray", fontSize: "50px" }}>404</p>
	
				</div>
				}/>

		</Routes>
	)
}