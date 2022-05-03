const componentType = {
	TEXT_INPUT: "TextInput",
	PASSWORD_INPUT: "PasswordInput",
	CHECKBOX_BASE: "CheckboxBase",
};
const uiValidationPattern = {
	PASSWORD_PATTERN:
		"Minimum eight characters, at least one letter and one number",
	FORM_ERROR: "Form is not valid",
};
const regexType = {
	EMAIL_REGEX:
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
export { componentType, uiValidationPattern, regexType };
