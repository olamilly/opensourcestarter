import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<div className="App d-flex flex-column justify-content-between">
			<Header />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
