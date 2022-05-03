import Input from "../styleComponents/Input";
import ErrorMessage from "./Error";

const TextInput = ({ field, handleOnBlur, isRequired, errorMessage }) => {
	const { type, label, name } = field;
	return (
		<>
			<Input
				onBlur={handleOnBlur}
				ariaLable={`${type}-${name}`}
				type={type}
				placeholder={label}
				required={isRequired}
				error={errorMessage}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>
	);
};

export default TextInput;
