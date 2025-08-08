import {type logInValues, logInSchema} from "./models"; 
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "./components/CustomInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LogInForm =()=>{
	const { setUser } = useAuth();
	const { control, handleSubmit, formState: { errors } } = useForm<logInValues>({
		resolver: zodResolver(logInSchema),
		mode: "onBlur"
		
	});

	const navigate = useNavigate();
	const url = "http://localhost:8080/api/auth/login";
	const onSubmit: SubmitHandler<logInValues> = async (data) => {
		
		try{
			const response = await fetch(url, {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({
		
					email: data.email,
					password: data.password,
				}),
			});
		
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem("token", data.token);

				const {_id, userName, role, email} = data.user;
				setUser({id: _id, userName, role, email});
				navigate("/private/home");

			} else {
				const errorData = await response.json();
				console.log(errorData)
			}
			
		}catch(error){
			console.error("Error de red:", error);
		}
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
	
			<InputForm name="email" control={control} label="Email" type="email" error={errors.email}  palceholder="correo@gmail.com"   autoComplete="email" />
			<InputForm name="password" control={control} label="Password" type="password" error={errors.password}  palceholder="contraseña"  autoComplete="new-password"/>
			
			<button type="submit" > Submit</button>
		</form>

	)

}
export default LogInForm;