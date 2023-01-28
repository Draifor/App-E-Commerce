import { Navbar } from "flowbite-react";
import NavbarItem from "./NavbarItem";
export default function CustomNavbar() {
  const navbars = [
    {
      id: "home",
      name: "Home",
      href: "/navbars",
      active: true,
    },
    {
      id: "hombre",
      name: "Hombre",
      href: "/hombre",
    },
    {
      id: "mujer",
      name: "Mujer",
      href: "/mujer",
    },
    {
      id: "infantil",
      name: "Infantil",
      href: "/infantil",
    },
    {
      id: "mascotas",
      name: "Mascotas",
      href: "/mascotas",
    },
    {
      id: "accesorios",
      name: "Accesorios",
      href: "/accesorios",
    },
    {
      id: "ofertas",
      name: "Ofertas",
      href: "/ofertas",
    },
  ];
  return (
    <Navbar className="bg-black dark:bg-black">
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="mx-auto">
        {/* {navbars.map((navbar) => {
          <NavbarItem id={navbar.id} href={navbar.href}>
            {navbar.name}
          </NavbarItem>;
        })} */}
        <Navbar.Link className="text-base text-white" href="/home">
          HOME
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/hombre">
          HOMBRE
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/mujer">
          MUJER
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/infantil">
          INFANTIL
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/mascotas">
          MASCOTAS
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/accesorios">
          ACCESORIOS
        </Navbar.Link>
        <Navbar.Link className="text-base text-white" href="/ofertas">
          OFERTAS
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
