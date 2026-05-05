import { z } from "zod"

const schema = z.object({
  timeOfDay: z.enum(["MORNING", "AFTERNOON"]).optional(),
  slot: z.string().min(1).max(20).optional(),
  label: z.string().min(1).max(120).optional(),
})

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const body = await readValidatedBody(event, schema.parse)
  return db.schedule.update({ where: { id }, data: body })
})
