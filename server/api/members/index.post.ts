import { z } from "zod"

const schema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  photo: z.string().min(1).max(255),
  position: z.number().int().min(1),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  return db.member.create({ data: body })
})
