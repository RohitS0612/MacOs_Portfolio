import WindowControls from "../components/WindowControls"
import WindowWrapper from "../hoc/WindowWrapper"
import useLocationStore from "../store/location"
import { locations } from "../constants"
import useWindowStore from "../store/window"
import React, { useState } from "react"
import clsx from "clsx"
import { Search, Menu } from "lucide-react"

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // console.log("active location ", activeLocation?.children);

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank")
  }

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt="item.name" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <div className="flex items-center gap-2">
            <button className="sm:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={16} />
            </button>
            <Search className="icon" />
        </div>
      </div>

      <div className="flex h-full">
        <div className={clsx("sidebar", !isSidebarOpen && "max-sm:hidden")}>
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations?.work?.children)}
        </div>

      <ul className="content">
        {activeLocation?.children.map((item) => {
          return (
            <li
          key={item.id}
          className={item.position}
          onClick={() => openItem(item)}
          >
            <img src={item.icon} alt={item.name} />
            <p className="text-sm font-medium truncate" style={{color: 'var(--text-color)'}}>{item.name}</p>
          </li>
          )
        })}
      </ul>
        </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow
