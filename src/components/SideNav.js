import React from "react";

const SideNav = () => {
  return (
    <header>
      <nav className="side-nav">
        <h1>Platzi</h1>
        <ul className="side-nav__list">
          <li>
            <a href="/">
              <i class="ri-home-2-fill ri-xl"></i>
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="ri-compass-3-line ri-xl"></i>
              <span>Explorar</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="ri-calendar-line ri-xl"></i>
              <span>Agenda</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="ri-chat-4-line ri-xl"></i>
              <span>Foro</span>
            </a>
          </li>
          <li>
            <a href="/">Connect</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">TV</a>
          </li>
        </ul>
        <div>
          <label htmlFor="switch-theme">
            <input type="checkbox" name="switch-theme" id="switch-theme" />
            Dark mode
          </label>
        </div>
      </nav>
    </header>
  );
};

export default SideNav;
