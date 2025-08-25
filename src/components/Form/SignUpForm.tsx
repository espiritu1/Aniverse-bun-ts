import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import CustomSelector from "./components/CustomSelector";
import { type signUpValues, signUpSchema } from "./models";
import Swal from "sweetalert2";

const SignUpForm = () => {

	const { control, handleSubmit, formState: { errors } } = useForm<signUpValues>({
		resolver: zodResolver(signUpSchema),
		mode: "onBlur",
		defaultValues:{
			userName: "",
			email: "",
			role:"",
			password: "",
			Password2: ""
		}
	});


	const onSubmit: SubmitHandler<signUpValues> = async (data) => { 

		try {
			const response = await fetch("http://localhost:8080/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userName: data.userName,
					email: data.email,
					role: data.role, // Asignar un rol por defecto si no se proporciona
					password: data.password,
				}),
			});

			if (response.ok) {
				const result = await response.json();
				Swal.fire({
					title: "¡Cuenta creada exitosamente!",
					text: `Bienvenido, ${result.user.userName}`,
					icon: "success",
					background: '#1f2937',
					confirmButtonText: "Aceptar",
				});

		} else {
			console.log(data);
			const errorData = await response.json();
			Swal.fire({
				html: `
					<h2 style="color: white;">Error al crear la cuenta</h2>
					<p style="color: white;">${errorData.msg || "Ocurrió un problema"}</p>
				`,
				icon: "error",
				background: '#1f2937',
				confirmButtonText: "Intentar de nuevo",
			});
		}
	
		} catch (error) {
			console.log(data);
			console.error("Error de red:", error);
				Swal.fire({
				title: '<span style="color: #ffffff">No se pudo conectar con el servidor</span>',
				icon: "error",
				background: '#1f2937',
				confirmButtonText: "Aceptar",
			});
		}
	};


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputForm name="userName" control={control} label="Name" type="text" error={errors.userName} palceholder="NickName"  autoComplete="username"/>
			<InputForm name="email" control={control} label="Email" type="email" error={errors.email}  palceholder="correo@gmail.com"   autoComplete="email" />
			{/*  <InputForm name="role" control={control} label="role" type="text" error={errors.role}  palceholder="mi rol"   autoComplete="email" />
			 */}

			 <CustomSelector
				name="role"
				control={control}
				label="Selecciona un rol"
				options={[
					{ value: "ADMIN_ROLE", label: "ADMIN_ROLE" },
					{ value: "USER_ROLE", label: "USER_ROLE" },
				]}
				error={errors.role}
			/>
			<InputForm name="password" control={control} label="Password" type="password" error={errors.password}  palceholder="contraseña"  autoComplete="new-password"/>
			<InputForm name="Password2" control={control} label="Confirm Password" type="password" error={errors.Password2} palceholder="repetir contraseña" autoComplete="new-password"  />
			<button type="submit" > Crear Cuenta</button>
		</form>
	)
}

export default SignUpForm;

