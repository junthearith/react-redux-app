import React from "react";
import { NavbarComponent } from "../navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../footer/FooterComponent";

function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default Layout;
