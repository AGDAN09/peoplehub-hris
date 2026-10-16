import { z } from "zod";
import { departments } from "./data";

export const employeeSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  department: z.enum(departments as [string, ...string[]], { message: "Pilih departemen" }),
  position: z.string().min(2, "Jabatan wajib diisi"),
  salary: z.coerce.number().min(3000000, "Gaji minimal Rp3.000.000"),
  joinDate: z.string().min(1, "Tanggal masuk wajib diisi"),
});
export type EmployeeInput = z.infer<typeof employeeSchema>;
