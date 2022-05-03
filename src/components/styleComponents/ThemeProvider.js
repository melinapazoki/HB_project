import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { GridThemeProvider, BaseCSS } from "styled-bootstrap-grid";

import GlobalStyles from "./GlobalStyles";

const palette = {
	primary_green: "#037d6b",
	Primart_alert: "#CC3333",
	primary_gray: "#979797",
	primary_black: "#555555",
};

const fonts = [
	"Montserrat, Verdana, Geneva, sans-serif",
	"'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif",
];
fonts.primary = fonts[0];
fonts.secondary = fonts[1];

const fontSizes = [14, 16, 20, 24, 32];
fontSizes.sm = fontSizes[0];
fontSizes.md = fontSizes[1];
fontSizes.lg = fontSizes[2];
fontSizes.xl = fontSizes[3];
fontSizes.xxl = fontSizes[4];

// const lineHeights = ["24px", "27px", "34px", "41px", "54px"];
// lineHeights.sm = lineHeights[0];
// lineHeights.md = lineHeights[1];
// lineHeights.lg = lineHeights[2];
// lineHeights.xl = lineHeights[3];
// lineHeights.xxl = lineHeights[4];

const fontWeights = [400, 600];
fontWeights.regular = fontWeights[0];
fontWeights.bold = fontWeights[1];

const space = [0, 4, 8, 16, 24, 32, 40, 56];
space.xxs = space[1];
space.xs = space[2];
space.sm = space[3];
space.md = space[4];
space.lg = space[5];
space.xl = space[6];
space.xxl = space[7];

const shadows = [
	"0 1px 3px 0 rgba(0, 0, 0, 0.1)",
	"0 2px 4px 0 rgba(0, 0, 0, 0.15)",
	"0 3px 8px 0 rgba(0, 0, 0, 0.15)",
	"0 6px 12px 0 rgba(0, 0, 0, 0.10)",
];
shadows.sm = shadows[0];
shadows.md = shadows[1];
shadows.lg = shadows[2];
shadows.xl = shadows[3];

const borderWidths = ["1px", "2px"];
borderWidths.sm = borderWidths[0];
borderWidths.md = borderWidths[1];

export const theme = {
	borderWidths,
	colors: {
		...palette,
		border: palette.primary_gray,
		background: palette.primary_green,
		text: palette.primary_gray,
		black: palette.primary_black,
		white: palette.primary_white,
		alert: palette.Primart_alert,
	},
	fonts,
	fontSizes,
	fontWeights,

	shadows,
	space,

	grid: {
		container: {
			padding: {
				xl: 32,
				lg: 32,
				md: 16,
				sm: 16,
			},
			maxWidth: {
				xl: 1144,
				lg: 960,
				md: "100%",
				sm: "100%",
			},
		},
	},
};

const ThemeProvider = ({ children }) => (
	<StyledComponentsProvider theme={theme}>
		<GridThemeProvider gridTheme={theme.grid}>
			<BaseCSS />
			<GlobalStyles />
			{children}
		</GridThemeProvider>
	</StyledComponentsProvider>
);

export default ThemeProvider;
