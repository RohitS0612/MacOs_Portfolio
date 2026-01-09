import { dockApps } from "../constants";
import useWindowStore from "../store/window";

const Home = () => {
    const { openWindow } = useWindowStore();

    const handleOpenApp = (app) => {
        if (app.canOpen) {
            openWindow(app.id);
        }
    };

    return (
        <section id="home" className="sm:hidden">
            <div className="p-4 grid grid-cols-4 gap-4">
                {dockApps.map((app) => (
                    <div key={app.id} className="flex flex-col items-center gap-1" onClick={() => handleOpenApp(app)}>
                        <img src={`/images/${app.icon}`} alt={app.name} className="w-16 h-16" />
                        <p className="text-white text-xs text-center">{app.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;