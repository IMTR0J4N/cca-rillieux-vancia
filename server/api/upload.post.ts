export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session.user) throw createError({ status: 401 })

  const formData = await readMultipartFormData(event)
  if (!formData?.length) throw createError({ status: 400, message: "Aucun fichier" })

  const file = formData[0]
  const ALLOWED = ["image/jpeg", "image/png", "image/webp"]
  const MAX_SIZE = 5 * 1024 * 1024

  if (!ALLOWED.includes(file.type ?? "")) {
    throw createError({ status: 400, message: "Format non supporté (JPG, PNG, WebP)" })
  }
  if (file.data.length > MAX_SIZE) {
    throw createError({ status: 400, message: "Fichier trop lourd (max 5Mo)" })
  }

  const ext = file.filename?.split(".").pop() ?? "jpg"
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const storage = useStorage("uploads")
  await storage.setItemRaw(filename, file.data)

  return { filename }
})
