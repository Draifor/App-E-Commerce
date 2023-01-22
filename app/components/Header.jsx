"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import SearchIcon from "./icons/SearchIcon";

export default function Header() {
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
    <header>
      <Navbar fluid={true} rounded={true}>
        <div className="flex justify-center gap-20">
          <TextInput
            id="serch"
            type="search"
            icon={SearchIcon}
            placeholder="Buscar"
            className="w-96"
            required={true}
          />
          <Navbar.Brand href="https://flowbite.com/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              NOMBRE DE LA EMPRESA
            </span>
          </Navbar.Brand>
        </div>
      </Navbar>
      <Navbar>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* {navbars.map((navbar) => {
            <Navbar.Link href={navbar.href}>{navbar.name}</Navbar.Link>;
          })} */}
          <Navbar.Link href="/home">
            Home
          </Navbar.Link>
          <Navbar.Link href="/hombre">
            Hombre
          </Navbar.Link>
          <Navbar.Link href="/mujer">
            Mujer
          </Navbar.Link>
          <Navbar.Link href="/infantil">
            Infantil
          </Navbar.Link>
          <Navbar.Link href="/mascotas">
            Mascotas
          </Navbar.Link>
          <Navbar.Link href="/accesorios">
            Accesorios
          </Navbar.Link>
          <Navbar.Link href="/ofertas">
            Ofertas
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
