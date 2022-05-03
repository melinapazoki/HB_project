import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
	size: props.size || ".7em",
	"aria-label": props.ariaLable,
}))`
	&:invalid {
		border-color: ${(props) => {
			return props.error ? "red" : "none";
		}};
	}
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	margin: ${(props) => props.size};
	padding: ${(props) => props.size};
	width: ${(props) => (props.width ? props.width : "80%")};
`;
Input.displayName = "Input";

export default Input;
