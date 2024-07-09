import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { selectTotalItems } from "../../redux/features/cart/cartSlice";

export function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  const totalItems = useSelector(selectTotalItems);
  console.log("total items: ", totalItems);
  const [navbarList, setNavbarList] = useState([
    { title: "Home", path: "/" },
    { title: "Counter", path: "counter" },
  ]);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex justify-center items-center md:order-2">
        <Link to='/cart' className="relative">
          <FaCartPlus className="mr-5" />
          <p className="absolute -top-5 right-2">{totalItems}</p>
        </Link>
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
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
