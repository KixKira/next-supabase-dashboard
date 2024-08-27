import React from "react";
import ListOfParticipants from "./ListOfParticipants";
import Table from "./ui/Table";

export default function ParticipantsTable() {
  const tableHeader = ["Cédula", "Nombre", "Correo", "Ticket", "Fecha"];

  return (
    <Table headers={tableHeader}>
      <ListOfParticipants />
    </Table>
  );
}
