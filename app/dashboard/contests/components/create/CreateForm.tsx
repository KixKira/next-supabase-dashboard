"use client";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createContest } from "../../actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre del concurso debe tener al menos 3 caracteres.",
  }),
  type: z.enum(["rifa", "sorteo"]),
  code: z.string().min(7, {
    message: "El código de promoción es requerido.",
  }),
  status: z.enum(["activo", "inactivo"]),
  dateStart: z.date({
    required_error: "La fecha de inicio en requerida.",
  }),
  dateEnd: z
    .date({
      required_error: "La fecha de fin en requerida.",
    })
    .refine((date) => date > new Date(), {
      message: "La fecha de fin debe ser posterior a la fecha actual.",
    }),
  URL: z.string().url({
    message: "La URL de promoción debe ser una URL válida.",
  }),
  description: z.string().optional(),
});

export default function CreateForm() {
  const status = ["activo", "inactivo"];
  const type = ["rifa", "sorteo"];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      type: "rifa",
      code: "",
      status: "activo",
      dateStart: new Date(),
      dateEnd: new Date(),
      URL: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createContest();

    document.getElementById("create-trigger")?.click();

    toast({
      title: "Ha presentado los siguiente valores:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-[#5E6770] p-4">
          <code className="text-[#F4F4F4]">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Promoción</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nombre de Promoción"
                  type="text"
                  {...field}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Promoción</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {type.map((type, index) => {
                    return (
                      <SelectItem value={type} key={index}>
                        {type}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
                <FormMessage />
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código de Promoción</FormLabel>
              <FormControl>
                <Input
                  placeholder="Código de Promoción"
                  type="text"
                  {...field}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar estado de usuario" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {status.map((status, index) => {
                    return (
                      <SelectItem value={status} key={index}>
                        {status}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription>
                Estado inactivo significa que la promoción ya no está en curso.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateStart"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Inicio</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={
                    field.value ? field.value.toISOString().slice(0, 10) : ""
                  }
                  onChange={(event) =>
                    field.onChange(new Date(event.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateEnd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Fin</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={
                    field.value ? field.value.toISOString().slice(0, 10) : ""
                  }
                  onChange={(event) =>
                    field.onChange(new Date(event.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="URL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de Promoción</FormLabel>
              <FormControl>
                <Input
                  placeholder="URL de Promoción"
                  type="url"
                  {...field}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción de Promoción</FormLabel>
              <FormControl>
                <textarea
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  rows={4}
                  {...field}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full flex gap-2 items-center bg-[#004E74] hover:bg-[#002851] text-[#E4EAF0]"
        >
          Enviar
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", { hidden: true })}
          />
        </Button>
      </form>
    </Form>
  );
}
