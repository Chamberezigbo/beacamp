import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import LandingSection from "./components/LandingSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<LandingSection />
		</div>
	);
}

export default App;
