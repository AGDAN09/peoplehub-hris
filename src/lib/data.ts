export type Employee = { id: string; name: string; email: string; department: string; position: string; status: "Aktif" | "Cuti" | "Nonaktif"; salary: number; joinDate: string };

export const departments = ["Engineering", "HR", "Finance", "Marketing", "Operations"];

export const employees: Employee[] = [
  { id: "EMP-001", name: "Muhammad Agdan Wirayudha", email: "agdan@acme.id", department: "Engineering", position: "Full Stack Developer", status: "Aktif", salary: 12000000, joinDate: "2026-01-22" },
  
];

export const headcountTrend = [
  { bulan: "Mei", total: 118 }, { bulan: "Jun", total: 121 }, { bulan: "Jul", total: 124 },
  { bulan: "Agu", total: 130 }, { bulan: "Sep", total: 133 }, { bulan: "Okt", total: 138 },
];

export const attendanceWeek = [
  { hari: "Sen", hadir: 128, terlambat: 6, absen: 4 }, { hari: "Sel", hadir: 131, terlambat: 4, absen: 3 },
  { hari: "Rab", hadir: 126, terlambat: 8, absen: 4 }, { hari: "Kam", hadir: 130, terlambat: 5, absen: 3 },
  { hari: "Jum", hadir: 122, terlambat: 9, absen: 7 },
];

export const leaveRequests = [
  { id: "LV-101", name: "Muhammad Agdan Wirayudha", type: "Cuti Tahunan", from: "2026-10-12", to: "2026-10-20", status: "Disetujui" },
];

export const rupiah = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
