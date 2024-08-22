import React from "react";
import DialogForm from "../DialogForm";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import EditForm from "./EditForm";

export default function EditContest() {
  return (
    <DialogForm
      id="update-trigger"
      title="Editar Promoción"
      Trigger={
        <Button variant="outline">
          <Pencil1Icon /> Editar
        </Button>
      }
      form={<EditForm />}
    />
  );
}
