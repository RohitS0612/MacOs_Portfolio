import useWindowStore from "../store/window.js";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zindex} = windows[windowsKey];
        const ref = useRef(null);

        return <section id={windowKey} ref={ref} style={{zIndex}} className="absolute">
        <Component />
        </section>
    }
    return (
        <div>

        </div>
    );
};

export default WindowWrapper;
