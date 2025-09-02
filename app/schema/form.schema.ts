import { z } from "zod";

export const formFillUpSchema = z.object({
  name: z.string().min(1, "Required"),
  requestedBy: z.string().min(1, "Required"),

  requestingInstitution: z.string().min(1, "Required"),
  type: z.string().min(1, "Required"),

  domain: z.string().min(1, "Required"),

  collaboratorDomain: z.array(z.string()).optional(),

  followerDomain: z.array(z.string()).optional(),

  benefitedInstitutions: z.array(z.string()).min(1, "Required"),

  studyModality: z.array(z.string()).min(1, "Required"),

  mandatory: z.string().min(1, "Required"),

  alternativeSolutionExist: z.string().min(1, "Required"),

  userImpact: z.string().min(1, "Required"),

  impact: z.string().optional(),

  complexityAndEffort: z.string().min(1, "Required"),


  clientPriority: z.string().min(1, "Required"),

  status: z.string().min(1, "Required"),
  
  description: z.string().min(1, "Required"),
});

export type FormFillUpSchema = z.infer<typeof formFillUpSchema>;
 