export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const schedule = await db.schedule.findUnique({ where: { id } })
  if (!schedule) throw createError({ status: 404, message: "Introuvable" })
  return schedule
})
