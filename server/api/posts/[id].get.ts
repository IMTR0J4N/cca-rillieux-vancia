export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const post = await db.post.findUnique({ where: { id } })
  if (!post) throw createError({ status: 404, message: "Introuvable" })
  return post
})
