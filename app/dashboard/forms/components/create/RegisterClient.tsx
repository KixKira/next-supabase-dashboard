import React from "react";
import DialogForm from "../DialogForm";
import { Button } from "@/components/ui/button";
import RegisterForm from "./RegisterForm";

export default function RegisterClient() {
  return (
    <DialogForm
      id="create-trigger"
      title="Registrar Cliente"
      Trigger={<Button variant="outline">Registrar Cliente</Button>}
      form={<RegisterForm />}
    />
  );
}
