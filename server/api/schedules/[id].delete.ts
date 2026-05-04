export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  await db.schedule.delete({ where: { id } })
  return { ok: true }
})
