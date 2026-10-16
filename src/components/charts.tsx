"use client";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { attendanceWeek, departments, employees, headcountTrend } from "@/lib/data";

const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];
const byDept = departments.map((d) => ({ name: d, value: employees.filter((e) => e.department === d).length }));

export function HeadcountChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={headcountTrend}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="bulan" /><YAxis domain={["dataMin - 5", "dataMax + 5"]} /><Tooltip />
        <Area type="monotone" dataKey="total" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} name="Karyawan" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={attendanceWeek}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="hari" /><YAxis /><Tooltip /><Legend />
        <Bar dataKey="hadir" stackId="a" fill="#22c55e" name="Hadir" />
        <Bar dataKey="terlambat" stackId="a" fill="#f59e0b" name="Terlambat" />
        <Bar dataKey="absen" stackId="a" fill="#ef4444" name="Absen" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DepartmentChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={byDept} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
          {byDept.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
        </Pie>
        <Tooltip /><Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
