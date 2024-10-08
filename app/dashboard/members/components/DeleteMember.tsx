"use client";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import React, { useTransition } from "react";
import { deleteMemberById } from "../actions";
import { toast } from "@/components/ui/use-toast";

export default function DeleteMember({ user_id }: { user_id: string }) {
  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    startTransition(async () => {
      const result = JSON.parse(await deleteMemberById(user_id));

      if (result?.error?.message) {
        toast({
          title: "Falló al eliminar el usuario.",
        });
      } else {
        toast({
          title: "Usuario eliminado éxitosamente.",
        });
      }
    });
  };

  return (
    <form action={onSubmit}>
      <Button variant="outline">
        <TrashIcon />
        Eliminar
      </Button>
    </form>
  );
}
