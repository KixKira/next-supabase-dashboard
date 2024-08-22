"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  dni: z.string().min(8, {
    message: "La cédula debe tener al menos 8 caracteres.",
  }),
  name: z.string().min(2, {
    message: "El nombre del cliente no puede estar vacío.",
  }),
  email: z.string().email().min(2, {
    message: "El email del cliente no puede estar vacío.",
  }),
  phone: z.number().min(10, {
    message: "El número del cliente está incompleto, por favor, verifique.",
  }),
  promotion: z.enum(["Test 1", "Test 2", "Test 3"]),
  invoice: z.number().min(5, {
    message: "El número de factura debe tener al menos 5 caracteres.",
  }),
  ticket: z.number().min(5, {
    message: "El ticket debe tener 5 dígitos.",
  }),
});

export default function RegisterForm() {
  const promotions = ["Test 1", "Test 2", "Test 3"];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dni: "",
      name: "",
      email: "",
      phone: 580000000000,
      promotion: "Test 1",
      invoice: 0,
      ticket: 0,
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <FormField
          control={form.control}
          name="dni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cédula/RIF</FormLabel>
              <FormControl>
                <Input placeholder="V/JXXXXXXXX-X" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Juan Pérez / Sisprot Global Fiber"
                  type="text"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="juanperez@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="+584241234567" type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="promotion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Promoción</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una Promoción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {promotions.map((promotion, index) => {
                    return (
                      <SelectItem value={promotion} key={index}>
                        {promotion}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invoice"
          render={({ field }) => (
            <FormItem>
              <FormLabel># de Factura</FormLabel>
              <FormControl>
                <Input placeholder="00000000" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ticket"
          render={({ field }) => (
            <FormItem>
              <FormLabel># de Ticket</FormLabel>
              <FormControl>
                <Input placeholder="00000" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
