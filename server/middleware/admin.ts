export default defineEventHandler(async (event) => {
  const url = getRequestURL(event).pathname
  const protectedPaths = [
    "/api/posts",
    "/api/members",
    "/api/pricing",
    "/api/schedules",
    "/api/admins",
    "/api/upload",
  ]

  if (protectedPaths.some(p => url.startsWith(p))) {
    const session = await getUserSession(event)
    if (!session.user) {
      throw createError({ status: 401, message: "Non autorisé" })
    }
  }
})
