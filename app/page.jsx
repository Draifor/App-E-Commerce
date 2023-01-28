"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import imagen1 from "../public/imagen1.jpg";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <Image src={imagen1} width="400px" heigth="auto" alt="Image" priority />
        <Image src={imagen1} width="400px" heigth="auto" alt="Image" priority />
        <Card href="#" className="col-span-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
}
