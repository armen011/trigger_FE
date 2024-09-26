import { z, ZodType } from "zod";
import { FormData } from "./types";

const phoneRegExp = new RegExp(`^(?:\/\+374|0)([1-9]\d)(\d{6})$`);

export const contactUsSchema: ZodType<FormData> = z.object({
  email: z.string({ required_error: "Email field is required" }).email(),
  phoneNumber: z.string().min(8, "Please provide a valid phone number"),
  companyName: z.string().min(1, "Please provide your company name"),
  aboutProject: z.string(),
});
