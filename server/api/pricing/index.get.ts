export default defineEventHandler(async () => {
  return db.pricing.findMany({ orderBy: { position: "asc" } })
})
