import { type Control, Controller, type FieldError } from "react-hook-form";


interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
  error?: FieldError;
}

const CustomSelector = ({ name, control, label, options, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue="" // Asegura que el campo esté controlado
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          >
            <option value="">Selecciona un rol</option> {/* Opción vacía */}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default CustomSelector;