import z from "zod";


export const signupSchema = z
  .object({
    name: z.string().min(1, { message: "Name can't be empty" }),
    RequestedBy: z.string({ message: "Requested by cant't be empty" }),
   RequestingInstitution:z.string({message:"Select Requesting Institution"}),
   type:z.string("slect type")
  })
  