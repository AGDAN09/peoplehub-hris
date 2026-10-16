import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AttendanceChart, DepartmentChart, HeadcountChart } from "@/components/charts";
import { Users, UserCheck, CalendarOff, Clock } from "lucide-react";

const stats = [
  { label: "Total Karyawan", value: "1", note: "+1 bulan ini", icon: Users },
  { label: "Hadir Hari Ini", value: "1", note: "100%", icon: UserCheck },
  { label: "Sedang Cuti", value: "0", note: "0 menunggu persetujuan", icon: CalendarOff },
  { label: "Terlambat", value: "0", note: "minggu ini", icon: Clock },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Dashboard</h1><p className="text-sm text-muted-foreground">Ringkasan HR (data dummy)</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, note, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">{label}</CardTitle><Icon className="h-4 w-4 text-muted-foreground" /></CardHeader>
            <CardContent><div className="text-2xl font-bold">{value}</div><p className="text-xs text-muted-foreground">{note}</p></CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card><CardHeader><CardTitle>Pertumbuhan Karyawan</CardTitle></CardHeader><CardContent><HeadcountChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>Kehadiran Minggu Ini</CardTitle></CardHeader><CardContent><AttendanceChart /></CardContent></Card>
        <Card className="lg:col-span-2"><CardHeader><CardTitle>Karyawan per Departemen</CardTitle></CardHeader><CardContent><DepartmentChart /></CardContent></Card>
      </div>
    </div>
  );
}
