import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { navIcons } from "../constants";

const MobileHeader = () => {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header id="mobile-header" className="sm:hidden">
            <div>
                <time>{time.format("h:mm")}</time>
            </div>
            <div>
                <ul className="flex items-center gap-2">
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default MobileHeader;
