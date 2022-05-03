import styled from "styled-components";

const Label = styled.label`
	position: relative;
	display: inline-block;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	margin: 10px;
`;

Label.displayName = "Label";
export default Label;
