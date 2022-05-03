import { regexType } from "../constants/commonConstants";

const validateEmail = (input) => {
	return input.match(regexType.EMAIL_REGEX);
};
const validatePassword = (input) => {
	return input.match(regexType.EMAIL_REGEX);
};
export {  validateEmail, validatePassword };
