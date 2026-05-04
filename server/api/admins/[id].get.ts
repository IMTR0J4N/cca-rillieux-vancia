export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const admin = await db.admin.findUnique({
    where: { id },
    select: { id: true, username: true, role: true, lastLoginAt: true, createdAt: true },
  })
  if (!admin) throw createError({ status: 404, message: "Introuvable" })
  return admin
})
