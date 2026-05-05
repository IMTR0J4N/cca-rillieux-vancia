import { z } from "zod"
import bcrypt from "bcryptjs"

const schema = z.object({
  username: z.string().min(1).max(255).optional(),
  password: z.string().min(8).optional(),
  role: z.enum(["ADMIN", "SUPER_ADMIN"]).optional(),
})

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (session.user?.role !== "SUPER_ADMIN") {
    throw createError({ status: 403, message: "Réservé aux super-admins" })
  }

  const id = Number(getRouterParam(event, "id"))
  const body = await readValidatedBody(event, schema.parse)
  const data: Record<string, unknown> = { ...body }
  if (body.password) data.password = await bcrypt.hash(body.password, 12)

  return db.admin.update({
    where: { id },
    data,
    select: { id: true, username: true, role: true, createdAt: true },
  })
})
