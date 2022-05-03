import "./App.css";
import SignUpForm from "./modules/SignUpForm";
import ThemeProvider from "../src/components/styleComponents/ThemeProvider";
import Header from "../src/layout/Header";
import Body from "../src/layout/Body";
import Footer from "../src/layout/Footer";
function App() {
	return (
		<ThemeProvider>
			<Header />
			<Body className="App">
				<SignUpForm />
			</Body>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
