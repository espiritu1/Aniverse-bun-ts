import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";

import InputForm from "../../../../components/Form/components/CustomInput"
import NavBar from "../../../../components/navbar/NavBar"
import { useAuth } from "../../../../context/AuthContext";

export const Perfil = () => {
	
	const { user } = useAuth();
	
	return (
		<>
			<NavBar/>

			<h1>Editar perfil</h1>
			
			<label htmlFor="">{user?.userName}</label>
			<input type="text"  />
			
			<br /> <br /><br />
			
			<button type="submit" >Guardar Cambios</button>
		</>
		)
}