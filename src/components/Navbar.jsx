import dayjs from "dayjs";
import {navIcons, navLinks} from "../constants/index.js";
import {useEffect, useState} from "react";
import useWindowStore from "../store/window.js";

const Navbar = () => {
    const [time, setTime] = useState(dayjs());
    const { openWindow } = useWindowStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo"/>
                <p className="font-bold">Rohit</p>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id} onClick={() => openWindow(item.type)}><p>{item.name}</p></li>
                    ))}
                </ul>

            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-$id}`}/>
                        </li>
                    ))}
                </ul>
                <time className="fixed-time">{dayjs().format("ddd MMM D h:mm:ss A")}</time>
            </div>
        </nav>
    )
}

export default Navbar
