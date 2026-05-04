import { PrismaClient } from "../../prisma/generated/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  pool: pg.Pool | undefined
}

const pool = globalForPrisma.pool ?? new pg.Pool({
  connectionString: process.env.DATABASE_URL!,
})

export const db = globalForPrisma.prisma ?? new PrismaClient({
  adapter: new PrismaPg(pool),
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
})

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.pool = pool
  globalForPrisma.prisma = db
}
