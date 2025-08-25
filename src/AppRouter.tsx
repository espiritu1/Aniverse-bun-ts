import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route  } from 'react-router-dom';
import {Login} from './pages/public/Login/Login';
import { PrivateAdmin } from "./guard/privateAdmin";
import { PrivateGuard } from './guard/PrivateGuard';
import { PrivateRouter } from './pages/private/DashBoard/PrivateRouter';
import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound';
import { PrivateRouterAdmin } from "./pages/private/DashBoard/PrivateRouterAdmin";

interface Props{
	children: ReactNode
}

export const AppRouter= ({children} : Props)=>{
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route path="/" element={<Navigate to={"/login"}/>} /> {/*ruta inicial  */}
				<Route path="/login" element={<Login/>} /> {/*ruta publica  */}
				
				
				
			
				<Route element={<PrivateGuard/>}>   {/*rutas privadas */}
					<Route path="/private/*" element={<PrivateRouter/>} /> {/* solo si tiene token  */}
					
					<Route element={<PrivateAdmin/>}>   {/* solo si tiene token y es administrador   */}
						<Route path="/admin/*" element={<PrivateRouterAdmin/>} />
					</Route>

				</Route>  
				

			
				{/* </Routess> */}
			</RoutesWithNotFound>
			{children}
		</BrowserRouter>
	)
}