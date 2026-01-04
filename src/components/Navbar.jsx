import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants/index.js";
import { useEffect, useState } from "react";
import useWindowStore from "../store/window.js";
import { Settings } from "lucide-react";
import useThemeStore from "../store/theme.js";
import clsx from "clsx";

const Navbar = () => {
    const [time, setTime] = useState(dayjs());
    const { openWindow } = useWindowStore();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const { theme, toggleTheme } = useThemeStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const handleThemeChange = (theme) => {
        toggleTheme(theme);
        setIsSettingsOpen(false);
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Rohit's Portfolio</p>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} onClick={() => openWindow(item.type)}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                    <li onClick={toggleSettings} className="cursor-pointer">
                        <img src="/icons/mode.svg" className="icon-hover" alt="icon"/>
                    </li>
                </ul>
                {isSettingsOpen && (
                    <div
                        className="absolute top-10 right-10 backdrop-blur-lg rounded-lg shadow-lg p-2 mt-3"
                        style={{ backgroundColor: "var(--nav-background)" }}
                    >
                        <ul style={{ color: "var(--text-color)" }}>
                            <li
                                className={clsx(
                                    "cursor-pointer p-2 hover:bg-gray-200 rounded-md",
                                    theme === "light" && "active-theme"
                                )}
                                onClick={() => handleThemeChange("light")}
                            >
                                Light Mode
                            </li>
                            <li
                                className={clsx(
                                    "cursor-pointer p-2 hover:bg-gray-200 rounded-md",
                                    theme === "dark" && "active-theme"
                                )}
                                onClick={() => handleThemeChange("dark")}
                            >
                                Dark Mode
                            </li>
                        </ul>
                    </div>
                )}
                <time className="fixed-time">
                    {dayjs().format("ddd MMM D h:mm:ss A")}
                </time>
            </div>
        </nav>
    );
};

export default Navbar;
