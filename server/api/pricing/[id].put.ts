import { z } from "zod"

const schema = z.object({
  label: z.string().min(1).max(30).optional(),
  firstDog: z.number().positive().optional(),
  secondDog: z.number().positive().optional(),
  perDog: z.number().positive().optional(),
  position: z.number().int().min(1).optional(),
})

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const body = await readValidatedBody(event, schema.parse)
  return db.pricing.update({ where: { id }, data: body })
})
