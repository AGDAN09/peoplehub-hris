import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaveRequests } from "@/lib/data";

const variant: Record<string, "default" | "secondary" | "destructive"> = { Disetujui: "default", Menunggu: "secondary", Ditolak: "destructive" };

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Cuti & Izin</h1><p className="text-sm text-muted-foreground">Pengajuan terbaru (data dummy)</p></div>
      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Karyawan</TableHead><TableHead>Jenis</TableHead><TableHead>Mulai</TableHead><TableHead>Selesai</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {leaveRequests.map((l) => (
              <TableRow key={l.id}><TableCell>{l.id}</TableCell><TableCell className="font-medium">{l.name}</TableCell><TableCell>{l.type}</TableCell><TableCell>{l.from}</TableCell><TableCell>{l.to}</TableCell><TableCell><Badge variant={variant[l.status]}>{l.status}</Badge></TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  );
}
