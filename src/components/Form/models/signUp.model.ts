import { z } from "zod";

export const signUpSchema = z.object({
  userName: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
  password: z.string().min(5, "La contraseña debe de tener al menos 5 caracteres"),
  Password2: z.string().min(5, "La confirmación debe tener al menos 5 caracteres")
}).refine(data => data.password === data.Password2, {
  message: "Las contraseñas son diferentes",
  path: ['Password2']
})

export type signUpValues = z.infer<typeof signUpSchema>;
