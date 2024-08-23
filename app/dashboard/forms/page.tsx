import React from "react";
import RegisterClient from "./components/create/RegisterClient";
import Participants from "../participants/page";

export default function Forms() {
  return (
    <div className="space-y-5 w-full overflow-y-auto px-3">
      <h1 className="text-3xl font-bold">Ingreso de Clientes</h1>
      <div className="flex gap-2">
        <RegisterClient />
      </div>
      <Participants />
    </div>
  );
}
