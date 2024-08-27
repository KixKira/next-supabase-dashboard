import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#B6BFC6]">
      <div className="max-w-md p-8 bg-[#E4EAF0] rounded-lg shadow-md">
        <Image
          src={Logo}
          alt="Dashboard"
          width={500}
          height={300}
          className="rounded-md mb-10"
        />
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Bienvenido al Sistema de Promociones de Sisprot Online
        </h1>
        <Link href="/auth">
          <button className="w-full bg-[#004E74] hover:bg-[#002851] text-white font-bold py-2 px-4 rounded">
            Acceder
          </button>
        </Link>
      </div>
    </div>
  );
}
