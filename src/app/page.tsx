"use client";
import Navigation from "./navigation";
import { useEffect, useState } from "react";
import data from "../assets/data.json";
import "./scss/globals.scss";
import "./scss/page.scss";

const filters = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "inactive", label: "Inactive" },
];

export default function Layout() {
  const [isActive, setIsActive] = useState("all");
  const [items, setItems] = useState(data);
  const [isDarkMode, setDarkMode] = useState(false);

  const filteredData =
    isActive === "all"
      ? items
      : items.filter((item) =>
          isActive === "active" ? item.isActive : !item.isActive,
        );

  const removeItem = (name: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else document.body.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <div className="container">
      <Navigation isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <main>
        <div className="headline">
          <h1>Extensions list</h1>
          <ul>
            {filters.map((filter) => (
              <li
                key={filter.key}
                className={isActive === filter.key ? "active" : ""}
                onClick={() => setIsActive(filter.key)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="boxes">
          {filteredData.length === 0 ? (
            <p className="zero-extensions">No extensions :(, add new!</p>
          ) : (
            filteredData.map((item) => (
              <div className="box" key={item.name}>
                <img src={item.logo} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button
                    className="remove"
                    onClick={() => removeItem(item.name)}
                  >
                    Remove
                  </button>
                  <div>
                    <button className="activeornot">f</button>
                    <div></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
