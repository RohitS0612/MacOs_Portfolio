import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";
import Dock from "./components/Dock.jsx";
import gsap from "gsap";
import Terminal from "./windows/Terminal.jsx";
import Safari from "./windows/Safari.jsx";
import Resume from "./windows/Resume.jsx";
import Finder from "./windows/Finder.jsx";
import  Text  from "./windows/Text.jsx";
import  Image  from "./windows/Image.jsx";
import Contact from "./windows/Contact.jsx";
import Home from "./components/Home.jsx";
import Photos from "./windows/Photos.jsx";
import useThemeStore from "./store/theme.js";
import { useEffect } from "react";
import MobileDock from "./components/MobileDock.jsx";
import MobileHeader from "./components/MobileHeader.jsx";

function App() {
    const { theme } = useThemeStore();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <main className={theme}>
            <MobileHeader />
            <Navbar/>
            <Welcome/>
            <Dock/>
            <MobileDock />
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact/>
            <Photos/>
            <Home/>
        </main>
    )
}

export default App
