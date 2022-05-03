import Input from "../styleComponents/Input";
import Label from "../styleComponents/Label";
import ErrorMessage from "../formElements/Error";
const Checkbox = ({
	field,
	isRequired,
	onCheckboxChange,
	checked,
	errorMessage,
}) => {
	const { name, component } = field;
	return (
		<>
			<Label htmlFor={name}>
				<Input
					type="checkbox"
					name={name}
					isRequired={isRequired}
					checked={checked}
					width="10px"
					onChange={onCheckboxChange}
				/>
				{component.props?.label}
			</Label>
			<ErrorMessage errorMessage={errorMessage} />
		</>
	);
};
export default Checkbox;
