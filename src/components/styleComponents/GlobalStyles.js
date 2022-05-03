import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";
const GlobalStyles = createGlobalStyle`
  body {
    ${css({
			margin: 0,
			fontFamily: "secondary",
			fontSize: "sm",
			lineHeight: "sm",
			backgroundColor: "background",
			color: "text",
		})}
  }
`;

export default GlobalStyles;
