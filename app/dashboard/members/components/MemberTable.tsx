import React from "react";
import ListOfMembers from "./ListOfMembers";
import Table from "./ui/Table";

export default function MemberTable() {
  const tableHeader = ["Nombre", "Rol", "Estado", "Ingreso", "Acciones"];

  return (
    <Table headers={tableHeader}>
      <ListOfMembers />
    </Table>
  );
}
