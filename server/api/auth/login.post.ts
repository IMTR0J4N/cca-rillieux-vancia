import { z } from "zod"
import bcrypt from "bcryptjs"

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)

  const admin = await db.admin.findUnique({
    where: { username: body.username },
  })

  if (!admin || !(await bcrypt.compare(body.password, admin.password))) {
    throw createError({ status: 401, message: "Identifiants incorrects" })
  }

  await db.admin.update({
    where: { id: admin.id },
    data: { lastLoginAt: new Date() },
  })

  await setUserSession(event, {
    user: {
      id: admin.id,
      username: admin.username,
      role: admin.role as "ADMIN" | "SUPER_ADMIN",
    },
  })

  return { ok: true }
})
