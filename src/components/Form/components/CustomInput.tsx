import { type Control, Controller, type FieldError } from "react-hook-form";
import './CustomInput.css'


interface Props {
	name: string;
	control: Control<any>;
	label: string;
	type?: string;
	error?: FieldError;
	autoComplete?: string;
	palceholder?: string;
}

const InputForm = ({ name, control, label, type, error, autoComplete, palceholder }: Props) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<Controller
				name={name}
				control={control}
				render={({ field }) =>
					<input	id={name} 
								type={type} 
								{...field} 
								autoComplete={autoComplete}
								placeholder={palceholder}
								className={`form-control ${error ? "is-invalid" : ""}`} />
				}
			/>
			{error && <p className="error">{error.message}</p>}
		</div>
	)
}

export default InputForm;
