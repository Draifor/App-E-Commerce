import { Navbar } from "flowbite-react";

export default function NavbarItem({ href, name }) {
  return <Navbar.Link href={href}>{name}</Navbar.Link>;
}
