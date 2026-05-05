import { z } from "zod"
import bcrypt from "bcryptjs"

const schema = z.object({
  username: z.string().min(1).max(255),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "SUPER_ADMIN"]).default("ADMIN"),
})

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session.user?.role !== "SUPER_ADMIN") {
    throw createError({ status: 403, message: "Réservé aux super-admins" })
  }

  const body = await readValidatedBody(event, schema.parse)
  const hashed = await bcrypt.hash(body.password, 12)
  return db.admin.create({
    data: { username: body.username, password: hashed, role: body.role },
    select: { id: true, username: true, role: true, createdAt: true },
  })
})
