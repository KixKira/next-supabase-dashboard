import { Button } from "@/components/ui/button";
import React from "react";
import DialogForm from "../DialogForm";
import CreateForm from "./CreateForm";

export default function CreateContest() {
  return (
    <DialogForm
      id="create-trigger"
      title="Crear Promoción"
      Trigger={<Button variant="outline">Crear+</Button>}
      form={<CreateForm />}
    />
  );
}
