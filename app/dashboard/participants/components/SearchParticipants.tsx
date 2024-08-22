import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchParticipants() {
  return (
    <Input
      placeholder="Buscar por cédula o nombre"
      className="border-zinc-600 focus:border-zinc-600"
    />
  );
}
