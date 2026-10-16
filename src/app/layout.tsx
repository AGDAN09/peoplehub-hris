import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata = { title: "HRIS Dashboard", description: "Template HRIS (frontend only, data dummy)" };

const fontStack = 'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased" style={{ fontFamily: fontStack }}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}