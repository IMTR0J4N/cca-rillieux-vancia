export default defineEventHandler(async () => {
  return db.member.findMany({ orderBy: { position: "asc" } })
})
