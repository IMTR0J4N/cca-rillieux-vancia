export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const pricing = await db.pricing.findUnique({ where: { id } })
  if (!pricing) throw createError({ status: 404, message: "Introuvable" })
  return pricing
})
