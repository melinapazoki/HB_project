import { render, fireEvent, screen } from "@testing-library/react";
import TextInput from "../components/FormElements/TextInput";

const initialProps = {
	field: {
		type: "text",
		lable: "First Name",
		name: "firstName",
	},
};
const setup = () => {
	const utils = render(<TextInput {...initialProps} />);
	const firstNameInput = utils.getByLabelText("text-firstName");
	return {
		firstNameInput,
		...utils,
	};
};

describe("first Name test cases", () => {
	test("user should able to enter first name and see as it is", () => {
		const { firstNameInput } = setup();
		fireEvent.change(firstNameInput, { target: { value: "Melina" } });
		expect(firstNameInput.value).toBe("Melina");
	});
	test("user should able to see error Validation if value is empty", () => {
		const { firstNameInput } = setup();
		fireEvent.change(firstNameInput, { target: { value: "" } });
		const errorElement = screen.getByTestId("error-element");
		expect(errorElement).toBeInTheDocument();
	});
});
