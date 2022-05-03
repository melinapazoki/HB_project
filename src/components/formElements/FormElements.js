import React, { useState } from "react";
import TextInput from "../formElements/TextInput";
import PasswordInput from "../formElements/PasswordInput";
import CheckBoxInput from "../formElements/CheckBoxInput";

import {
	componentType,
	uiValidationPattern,
	validationUIType,
} from "../../constants/commonConstants";
import { validateEmail, validatePassword } from "../../utils/customUtils";

const FormElements = ({ field, validation }) => {
	const { component, name } = field;
	const { schema, config } = validation;
	const { errMessages } = config;

	const [errorMsg, setError] = useState("");
	const [isVisible, setVisiblity] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const isRequired = schema.properties[name]?.required;
	const errorMessage = errMessages[name]?.required;
	const patternError = errMessages[name]?.format;

	const handleOnBlur = (event) => {
		event.preventDefault();
		const value = event.target.value;
		if (!event.target.checkValidity()) {
			if (value && name === validationUIType.EMAIL && !validateEmail(value)) {
				setError(patternError);
				return;
			}
			setError(errorMessage);
			return;
		} else if (
			value &&
			component === componentType.PASSWORD_INPUT &&
			!validatePassword(value)
		) {
			setError(uiValidationPattern.PASSWORD_PATTERN);
			return;
		}
		setError("");
	};

	const handlePasswordVisiblity = () => {
		setVisiblity(!isVisible);
	};

	const onCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<>
			{component === componentType.TEXT_INPUT && (
				<TextInput
					field={field}
					isRequired={isRequired}
					handleOnBlur={handleOnBlur}
					errorMessage={errorMsg}
				/>
			)}
			{component === componentType.PASSWORD_INPUT && (
				<PasswordInput
					field={field}
					handleOnBlur={handleOnBlur}
					isRequired={isRequired}
					handlePasswordVisiblity={handlePasswordVisiblity}
					isVisible={isVisible}
					errorMessage={errorMsg}
				/>
			)}
			{component?.name === componentType.CHECKBOX_BASE && (
				<CheckBoxInput
					isRequired={isRequired}
					field={field}
					onCheckboxChange={onCheckboxChange}
					checked={isChecked}
					errorMessage={errorMsg}
				/>
			)}
		</>
	);
};

export default FormElements;
