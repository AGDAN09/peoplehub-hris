"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/employees", label: "Karyawan", icon: Users },
  { href: "/leave", label: "Cuti & Izin", icon: CalendarDays },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-background p-4 md:flex">
  <div className="mb-6 text-lg font-bold">HRIS<span className="text-primary">.</span>PeopleHub</div>
  <nav className="space-y-1">
    {nav.map(({ href, label, icon: Icon }) => (
      <Link key={href} href={href} className={cn("flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted", path === href && "bg-muted font-medium")}>
        <Icon className="h-4 w-4" /> {label}
      </Link>
    ))}
  </nav>

  <div className="mt-auto space-y-3">
    <div className="flex items-center gap-3 rounded-lg border p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">MA</div>
      <div className="leading-tight">
        <div className="text-sm font-medium">Muhammad Agdan Wirayudha</div>
        <div className="text-xs text-muted-foreground">Admin HR</div>
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground">Dibuat oleh agdann.jsx</p>
  </div>
</aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
