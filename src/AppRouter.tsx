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
				<Route path="/" element={<Navigate to={"/login"}/>} /> {/*rita inicial  */}
				<Route path="/login" element={<Login/>} />
				
				
			
				<Route element={<PrivateGuard/>}>   {/* esto es la parte privada USER */}
					<Route path="/private/*" element={<PrivateRouter/>} />
					
					<Route element={<PrivateAdmin/>}>   
						<Route path="/admin/*" element={<PrivateRouterAdmin/>} />
					</Route>

				</Route>  
				

			
				{/* </Routess> */}
			</RoutesWithNotFound>
			{children}
		</BrowserRouter>
	)
}