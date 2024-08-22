import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";
import BasicForm from "./BasicForm";
import DetailsForm from "./DetailsForm";
import AdvanceForm from "./AdvanceForm";

export default function EditForm() {
  return (
    <Tabs defaultValue="basic" className="w-full space-y-5">
      <TabsList className={cn("grid w-full", "grid-cols-3")}>
        <TabsTrigger value="basic">Básico</TabsTrigger>
        <TabsTrigger value="details">Detalles</TabsTrigger>
        <TabsTrigger value="advance">Avanzado</TabsTrigger>
      </TabsList>
      <TabsContent value="basic">
        <BasicForm />
      </TabsContent>
      <TabsContent value="details">
        <DetailsForm />
      </TabsContent>
      <TabsContent value="advance">
        <AdvanceForm />
      </TabsContent>
    </Tabs>
  );
}
