import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./components/CustomInput";
import { type FormValues, schema } from "./models";
import Swal from "sweetalert2";


const CustomForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues:{
      userName: "",
      email: "",
      password: "",
      Password2: ""
    }
    
  });

  /* const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  } */

const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: data.userName,
          email: data.email,
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
      //  console.log(data)
      // Limpia el formulario
      } else {
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
      <InputForm name="password" control={control} label="Password" type="password" error={errors.password}  palceholder="contraseña"  autoComplete="new-password"/>
      <InputForm name="Password2" control={control} label="Confirm Password" type="password" error={errors.Password2} palceholder="repetir contraseña" autoComplete="new-password"  />
      <button type="submit" > Submit</button>
    </form>
  )
}

export default CustomForm;
