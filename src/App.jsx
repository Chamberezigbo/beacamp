import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import "boxicons";

import LandingSection from "./components/Landing-Components/LandingSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<LandingSection />
		</>
	);
}

export default App;
