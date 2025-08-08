import { z } from "zod";

export const logInSchema = z.object({
  email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
  password: z.string().min(5, "La contraseña debe de tener al menos 5 caracteres"),
})

export type logInValues = z.infer<typeof logInSchema>;