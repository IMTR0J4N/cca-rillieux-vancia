import { z } from "zod"

const schema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().min(1).optional(),
  photo: z.string().min(1).max(255).optional(),
  position: z.number().int().min(1).optional(),
})

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const body = await readValidatedBody(event, schema.parse)
  return db.member.update({ where: { id }, data: body })
})
