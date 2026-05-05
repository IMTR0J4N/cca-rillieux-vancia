export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session.user?.role !== "SUPER_ADMIN") {
    throw createError({ status: 403, message: "Réservé aux super-admins" })
  }

  const id = Number(getRouterParam(event, "id"))
  if (session.user.id === id) {
    throw createError({ status: 400, message: "Impossible de supprimer son propre compte" })
  }

  await db.admin.delete({ where: { id } })
  return { ok: true }
})
