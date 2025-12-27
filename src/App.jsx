import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";
import Dock from "./components/Dock.jsx";
import gsap from "gsap";
import Terminal from "./windows/Terminal.jsx";

function App() {

    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
        </main>
    )
}

export default App
