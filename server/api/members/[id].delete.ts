export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  await db.member.delete({ where: { id } })
  return { ok: true }
})
