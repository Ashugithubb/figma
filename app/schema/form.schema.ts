import { z } from "zod";

export const formFillUpSchema = z.object({
  name: z.string().min(1, "Required"),
  requestedBy: z.string().min(1,  "Required"),

  requestingInstitution: z.string().min(1,  "Required"),
  type: z.string().min(1,  "Required"),

  domain: z.string().min(1, "Required"),
  collaboratorDomain: z.string().optional(),
  followerDomain: z.string().optional(),

  benifitedInstitutions: z.string().min(1,  "Required"),
  studyModality: z.string().optional(),
  mandatory: z.enum(["Yes", "No"]),
  alternativeSolutions: z.enum(["Yes", "No"]),
  userImpact: z.enum(["low", "medium", "high"]),
  impact: z.string().optional(),
  complexityEffort: z.enum(["XS", "S", "M", "L"]),
  clientPriority: z.enum(["Ten", "Twenty", "Thirty"]),
  status: z.enum(["registred", "not-registred"]),


  startDate: z.date().optional(),
  finishDate: z.date().optional(),

  description: z.string().optional()
});

export type FormFillUpSchema = z.infer<typeof formFillUpSchema>;


 