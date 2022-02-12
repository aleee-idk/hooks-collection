import React, { useEffect } from "react";
import "./Theme.scss";

const Sidebar = () => {
  useEffect(() => {
    const list = Array.from(
      document.getElementById("sidebar-menu").getElementsByClassName("dropdown")
    );

    list.forEach((item) =>
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.classList.toggle("open");
      })
    );

    return () => {
      const list = Array.from(
        document
          .getElementById("sidebar-menu")
          .getElementsByClassName("dropdown")
      );

      list.forEach((item) => item.removeEventListener("click"));
    };
  }, []);

  return (
    <section className="sidebar">
      <h3>Index</h3>
      <ul id="sidebar-menu">
        <li className="dropdown">
          Fetch Stuff
          <ul className="dropdown_menu">
            <li>
              <a href="#get-request">GET</a>
            </li>
            <li>POST</li>
            <li>PUT</li>
            <li>DELETE</li>
            <li>Map Array from GET request</li>
          </ul>
        </li>
        <li className="dropdown">
          Format Stuff
          <ul className="dropdown_menu">
            <li>Serialize to Base64</li>
          </ul>
        </li>
        <li className="dropdown">
          Forms
          <ul className="dropdown_menu">
            <li>useForm</li>
          </ul>
        </li>
        <li className="dropdown">
          Utilities
          <ul className="dropdown_menu">
            <li>Intersection Watcher</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
