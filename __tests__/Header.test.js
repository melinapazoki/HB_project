import { render, screen } from "@testing-library/react";
import Header from "../layout/Header";

test("Header is exist in application", () => {
	render(<Header />);
	const HeaderElement = screen.getByTestId("header-element");
	expect(HeaderElement).toBeInTheDocument();
});
