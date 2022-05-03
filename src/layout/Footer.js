import Flex from "../components/styleComponents/Flex";
import Text from "../components/styleComponents/Text";

const Footer = () => (
	<Flex
		borderTopWidth="sm"
		borderTopColor="border"
		borderTopStyle="solid"
		backgroundColor="white"
		justifyContent="center"
		alignItems="center"
		padding="sm"
		position="fixed"
		width="100%"
		bottom="0">
		<Text fontSize="sm">© HelloBetter 2022</Text>
	</Flex>
);

export default Footer;
