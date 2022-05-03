import React from "react";
import Text from "../styleComponents/Text";

const ErrorMessage = ({ errorMessage }) => {
	return (
		<Text data-testid="error-element" color="alert">
			{errorMessage}
		</Text>
	);
};

export default ErrorMessage;
