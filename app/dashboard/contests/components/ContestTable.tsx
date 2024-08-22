import Table from "@/components/ui/Table";
import React from "react";
import ListOfContests from "./ListOfContests";

export default function ContestTable() {
  const tableHeader = [
    "Nombre",
    "Código",
    "Estado",
    "Fecha de Inicio",
    "Fecha de Fin",
  ];

  return (
    <Table headers={tableHeader}>
      <ListOfContests />
    </Table>
  );
}
