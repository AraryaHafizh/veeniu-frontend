"use client";

import { DashboardSheet } from "@/components/dashboard-sheet";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useCreateEvent } from "../events/useCreateEvent";

export const Sheet = () => {
  const { mutateAsync, isPending, open, setOpen } = useCreateEvent();
  return (
    <DashboardSheet
      trigger="Create"
      title="Create new ticket"
      open={open}
      setOpen={setOpen}
    >
      <CreateVoucherForm />
    </DashboardSheet>
  );
};

const createVoucherSchema = z.object({
  name: z
    .string()
    .min(3, "Min voucher code length is 6 characters.")
    .max(6, "Max voucher code length is 6 characters."),
  price: z.number().min(1000, "Value must be at least Rp1.000."),
  stock: z.number().min(1, "Stock must be at least 1."),
  parentEvent: z.string().nonempty("Parent event is required."),
});

export const CreateVoucherForm = () => {
  const form = useForm<z.infer<typeof createVoucherSchema>>({
    resolver: zodResolver(createVoucherSchema),
    defaultValues: {
      name: "",
      price: 0,
      stock: 1,
      parentEvent: "",
    },
  });

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID").format(value);
  };

  function onSubmit(data: z.infer<typeof createVoucherSchema>) {
    toast.success("Voucher created successfully!");
    console.log(data);
  }

  return (
    <section className="flex h-full flex-col">
      <form
        id="create-voucher-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col"
      >
        <FieldGroup className="flex h-full flex-col">
          <div className="scroll-hidden flex-1 space-y-5 overflow-y-auto px-5 pb-24">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Ticket name</FieldLabel>
                  <Input {...field} placeholder="Enter ticket name" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Price</FieldLabel>
                  <div className="relative">
                    <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
                      Rp
                    </span>
                    <Input
                      {...field}
                      className="pl-8"
                      value={
                        field.value ? formatRupiah(Number(field.value)) : ""
                      }
                      onChange={(e) => {
                        const raw = e.target.value.replace(/[^\d]/g, "");
                        field.onChange(Number(raw || 0));
                      }}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="stock"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Stock</FieldLabel>
                  <Input
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="parentEvent"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Parent Event</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="event1">
                        Music Festival 2025
                      </SelectItem>
                      <SelectItem value="event2">
                        Maher Zain Live Jakarta
                      </SelectItem>
                      <SelectItem value="event3">Startup Expo 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="bg-background sticky bottom-0 p-5 shadow-sm">
            <Button className="w-full" type="submit">
              Create Voucher
            </Button>
          </div>
        </FieldGroup>
      </form>
    </section>
  );
};
