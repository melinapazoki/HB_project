import React from "react";
import Flex from "../components/styleComponents/Flex";
import Text from "../components/styleComponents/Text";
const Header = () => (
	<Flex
		boxShadow="md"
		backgroundColor="white"
		justifyContent="center"
		alignItems="center"
		padding="sm">
		<Text data-testid="header-element">Welcome to HelloBetter Case study</Text>
	</Flex>
);

export default Header;
