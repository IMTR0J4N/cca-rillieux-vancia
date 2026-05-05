import { z } from "zod"

const schema = z.object({
  timeOfDay: z.enum(["MORNING", "AFTERNOON"]),
  slot: z.string().min(1).max(20),
  label: z.string().min(1).max(120),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  return db.schedule.create({ data: body })
})
