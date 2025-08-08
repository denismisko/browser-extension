"use client";
import Navigation from "./navigation";
import { useState } from "react";
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

  const filteredData =
    isActive === "all"
      ? items
      : items.filter((item) =>
          isActive === "active" ? item.isActive : !item.isActive
        );

  const removeItem = (name: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const toggleStatus = (name: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className="container">
      <Navigation />
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
            <p className="zero-extensions">
              No extensions :( or no active, add new!
            </p>
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
                  <div className="btns">
                    <button
                      className="activeornot"
                      onClick={() => toggleStatus(item.name)}
                    >
                      <div
                        className={
                          item.isActive ? "switcher " : "switcher active"
                        }
                      >
                        <div
                          className={item.isActive ? "status" : "status active"}
                        ></div>
                      </div>
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="name">
          Challenge by <a href="https://www.frontendmentor.io/home">FrontEnd Mentor</a>. Coded
          by <a href="https://github.com/denismisko">Denis Miškolci</a>.
        </div>
      </main>
    </div>
  );
}
