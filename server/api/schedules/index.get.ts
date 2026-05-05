export default defineEventHandler(async () => {
  return db.schedule.findMany({ orderBy: [{ timeOfDay: "asc" }, { slot: "asc" }] })
})
