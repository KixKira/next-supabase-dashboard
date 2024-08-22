import Table from "@/components/ui/Table";
import React from "react";
import ListOfParticipants from "./ListOfParticipants";

export default function ParticipantsTable() {
  const tableHeader = [
    "Cédula",
    "Nombre",
    "Correo",
    "WhatsApp",
    "Ticket",
    "Fecha",
  ];

  return (
    <Table headers={tableHeader}>
      <ListOfParticipants />
    </Table>
  );
}
