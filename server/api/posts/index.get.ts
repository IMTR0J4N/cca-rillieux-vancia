export default defineEventHandler(async () => {
  return db.post.findMany({
    orderBy: { publishedAt: "desc" },
  })
})
