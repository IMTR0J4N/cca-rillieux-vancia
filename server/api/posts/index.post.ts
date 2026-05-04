import { z } from "zod"

const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(20),
  publishedAt: z.string().datetime(),
  image: z.string().min(1).max(255),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  return db.post.create({
    data: { ...body, publishedAt: new Date(body.publishedAt) },
  })
})
