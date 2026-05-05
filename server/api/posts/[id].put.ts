import { z } from "zod"

const schema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(20).optional(),
  publishedAt: z.string().datetime().optional(),
  image: z.string().min(1).max(255).optional(),
})

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  const body = await readValidatedBody(event, schema.parse)
  return db.post.update({
    where: { id },
    data: {
      ...body,
      ...(body.publishedAt ? { publishedAt: new Date(body.publishedAt) } : {}),
    },
  })
})
