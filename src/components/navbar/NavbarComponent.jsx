import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export function NavbarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location?.pathname;
    const [navbarList, setNavbarList] = useState([
      { title: "Home", path: "/" },
      { title: "Counter", path: "counter" }
    ]);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarList?.map((item, index) => {
          return (
            <Navbar.Link
              key={index}
              as={Link}
              to={item.path}
              active={pathname === item.path}
            >
              {item.title}
            </Navbar.Link>
          )
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
