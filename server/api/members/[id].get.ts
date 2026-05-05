export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const member = await db.member.findUnique({ where: { id } })
  if (!member) throw createError({ status: 404, message: "Introuvable" })
  return member
})
