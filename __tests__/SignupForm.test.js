import { render, fireEvent, screen } from "@testing-library/react";
import SignUpForm from "../modules/SignUpForm";

const setup = () => {
	const utils = render(<SignUpForm />);
	const submitBtn = utils.getByTestId("submit-element");
	return {
		submitBtn,
		...utils,
	};
};

describe("Check Input Button", () => {
	test("user should able to see error Validation on form at first loading without fill data", () => {
		const { submitBtn } = setup();
		fireEvent.click(submitBtn);
		const errorElement = screen.getByTestId("error-element");
		expect(errorElement).toBeInTheDocument();
	});
});
