import useWindowStore from "../store/window";
import WindowControls from "../components/WindowControls";
import { Search, Mail, Menu } from "lucide-react";
import { gallery, photosLinks } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useState } from "react";
import clsx from "clsx";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* WINDOW HEADER */}
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
            <button className="sm:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={16} />
            </button>
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      {/* WINDOW CONTENT */}
      <div className="flex w-full h-full">
        {/* SIDEBAR */}
        <aside className={clsx("sidebar", !isSidebarOpen && "max-sm:hidden")}>
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} className="flex items-center gap-2 cursor-pointer">
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </aside>

        {/* GALLERY */}
        <section className="gallery flex-1">
          <ul className="grid grid-cols-3 gap-3">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                className="cursor-pointer"
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageurl: img,
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

// WRAP WITH WINDOW SYSTEM
const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
