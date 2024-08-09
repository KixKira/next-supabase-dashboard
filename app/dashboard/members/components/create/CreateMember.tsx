import { Button } from "@/components/ui/button";
import React from "react";
import DailogForm from "../DialogForm";
import CreateForm from "./CreateForm";

export default function CreateMember() {
  return (
    <DailogForm
      id="create-trigger"
      title="Crear Miembro"
      Trigger={<Button variant="outline">Crear+</Button>}
      form={<CreateForm />}
    />
  );
}
