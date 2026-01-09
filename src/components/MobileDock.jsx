import { dockApps } from "../constants/index.js";
import useWindowStore from "../store/window.js";

const MobileDock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if (!window) return;

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
        <section id="mobile-dock" className="sm:hidden">
            <div className="dock-container">
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className="relative flex justify-center">
                        <button type="button" className="dock-icon" aria-label={name}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img src={`/images/${icon}`} alt={name} loading="lazy"
                                className={canOpen ? "" : "opacity-60"} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MobileDock;
