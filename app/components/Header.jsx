"use client";
import { Button, TextInput } from "flowbite-react";
import Navbar from "./Navbar";
import SearchIcon from "./icons/SearchIcon";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center gap-4 p-2 bg-black">
        <TextInput
          id="serch"
          type="search"
          icon={SearchIcon}
          color={{ color: "black" }}
          placeholder="Buscar"
          className="w-96"
          required={true}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NOMBRE DE LA EMPRESA
        </span>
      </div>
      <Navbar />
    </header>
  );
}
