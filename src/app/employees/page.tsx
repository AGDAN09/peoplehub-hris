"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EmployeeForm } from "@/components/employee-form";
import { employees as seed, rupiah, type Employee } from "@/lib/data";

const variant = { Aktif: "default", Cuti: "secondary", Nonaktif: "outline" } as const;

export default function EmployeesPage() {
  const [list, setList] = useState<Employee[]>(seed);
  const [q, setQ] = useState("");
  const rows = list.filter((e) => (e.name + e.department + e.position).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-2xl font-bold">Karyawan</h1><p className="text-sm text-muted-foreground">{list.length} karyawan terdaftar</p></div>
        <EmployeeForm onSubmit={(v) => setList([{ ...v, id: `EMP-${String(list.length + 1).padStart(3, "0")}`, status: "Aktif" }, ...list])} />
      </div>
      <Input placeholder="Cari nama, departemen, jabatan..." value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" />
      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Nama</TableHead><TableHead>Departemen</TableHead><TableHead>Jabatan</TableHead><TableHead>Gaji</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {rows.map((e) => (
              <TableRow key={e.id}>
                <TableCell className="text-muted-foreground">{e.id}</TableCell>
                <TableCell><div className="font-medium">{e.name}</div><div className="text-xs text-muted-foreground">{e.email}</div></TableCell>
                <TableCell>{e.department}</TableCell><TableCell>{e.position}</TableCell><TableCell>{rupiah(e.salary)}</TableCell>
                <TableCell><Badge variant={variant[e.status]}>{e.status}</Badge></TableCell>
              </TableRow>
            ))}
            {!rows.length && <TableRow><TableCell colSpan={6} className="py-8 text-center text-muted-foreground">Tidak ada data</TableCell></TableRow>}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
