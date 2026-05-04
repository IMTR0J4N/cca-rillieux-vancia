import { z } from "zod"

const schema = z.object({
  label: z.string().min(1).max(30),
  firstDog: z.number().positive(),
  secondDog: z.number().positive(),
  perDog: z.number().positive(),
  position: z.number().int().min(1),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  return db.pricing.create({ data: body })
})
