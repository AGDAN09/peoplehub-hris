"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { departments } from "@/lib/data";
import { employeeSchema, type EmployeeInput } from "@/lib/schema";

export function EmployeeForm({ onSubmit }: { onSubmit: (v: EmployeeInput) => void }) {
  const [open, setOpen] = useState(false);
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<EmployeeInput>({ resolver: zodResolver(employeeSchema) as any });
  const submit = (v: EmployeeInput) => { onSubmit(v); reset(); setOpen(false); };
  const Err = ({ m }: { m?: string }) => (m ? <p className="text-xs text-destructive">{m}</p> : null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button><Plus className="mr-1 h-4 w-4" />Tambah Karyawan</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Karyawan Baru</DialogTitle></DialogHeader>
        <form onSubmit={handleSubmit(submit)} className="space-y-3">
          <div className="space-y-1"><Label>Nama</Label><Input {...register("name")} /><Err m={errors.name?.message} /></div>
          <div className="space-y-1"><Label>Email</Label><Input {...register("email")} /><Err m={errors.email?.message} /></div>
          <div className="space-y-1"><Label>Departemen</Label>
            <Controller name="department" control={control} render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger><SelectValue placeholder="Pilih departemen" /></SelectTrigger>
                <SelectContent>{departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
              </Select>
            )} /><Err m={errors.department?.message} /></div>
          <div className="space-y-1"><Label>Jabatan</Label><Input {...register("position")} /><Err m={errors.position?.message} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1"><Label>Gaji (Rp)</Label><Input type="number" {...register("salary")} /><Err m={errors.salary?.message} /></div>
            <div className="space-y-1"><Label>Tanggal Masuk</Label><Input type="date" {...register("joinDate")} /><Err m={errors.joinDate?.message} /></div>
          </div>
          <Button type="submit" className="w-full">Simpan</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
