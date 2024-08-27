import React from "react";
import ListOfContests from "./ListOfContests";
import Table from "./ui/Table";

export default function ContestTable() {
  const tableHeader = [
    "Nombre",
    "Código",
    "Página",
    "Fecha de Inicio",
    "Fecha de Fin",
    "Acciones",
  ];

  return (
    <Table headers={tableHeader}>
      <ListOfContests />
    </Table>
  );
}
