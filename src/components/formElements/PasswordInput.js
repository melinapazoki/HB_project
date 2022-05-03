import Input from "../styleComponents/Input";
import ErrorMessage from "./Error";

const PasswordInput = ({
	field,
	handleOnBlur,
	isRequired,
	errorMessage,
	handlePasswordVisiblity,
	isVisible,
}) => {
	const { label } = field;
	return (
		<>
			<Input
				onBlur={handleOnBlur}
				type={isVisible ? "text" : "password"}
				placeholder={label}
				required={isRequired}
				error={errorMessage}
			/>

			<span
				style={{
					position: "absolute",
					right: "15%",
					marginTop: "20px",
					cursor: "pointer",
				}}
				type="button"
				onClick={handlePasswordVisiblity}>
				{isVisible ? "hide" : "show"}
			</span>

			<ErrorMessage errorMessage={errorMessage} />
		</>
	);
};

export default PasswordInput;
