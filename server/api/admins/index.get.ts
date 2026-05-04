export default defineEventHandler(async () => {
  return db.admin.findMany({
    select: { id: true, username: true, role: true, lastLoginAt: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  })
})
