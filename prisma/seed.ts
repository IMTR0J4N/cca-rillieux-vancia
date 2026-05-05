import "dotenv/config"
import { PrismaClient } from "./generated/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import bcrypt from "bcryptjs"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! })
const db = new PrismaClient({ adapter: new PrismaPg(pool) })

async function main() {
  await db.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: await bcrypt.hash("changeme123", 12),
      role: "SUPER_ADMIN",
    },
  })
  console.log("✅ Admin seed créé — username: admin / password: changeme123")
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
