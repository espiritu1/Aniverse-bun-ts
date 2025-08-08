import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route  } from 'react-router-dom';
import {Login} from './pages/public/Login/Login';
import { PrivateGuard } from './guard/PrivateGuard';
import { PrivateRouter } from './pages/private/DashBoard/PrivateRouter';
import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound';


interface Props{
	children: ReactNode
}

export const AppRouter= ({children} : Props)=>{
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				{/* <Routes> */}
				<Route path="/" element={<Navigate to={"/login"}/>} />
				<Route path="/login" element={<Login/>} />
				<Route element={<PrivateGuard />}>   {/* esto es la parte privada */}
					<Route path="/private/*" element={<PrivateRouter/>} />
				</Route>
				{/* </Routes> */}
			</RoutesWithNotFound>
			{children}
		</BrowserRouter>
	)
}