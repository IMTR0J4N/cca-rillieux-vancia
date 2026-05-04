# Brief Claude Code — CCA Rillieux-Vancia

## Contexte

Refonte complète d'un site vitrine + backoffice pour un club canin associatif.
Tu vas recevoir les fichiers de design via la feature "Give to Claude Code" de Claude Design.
Ces fichiers sont en JSX/React — tu dois les convertir en Vue SFC pour Nuxt 4.

---

## Stack exacte

| Outil | Version | Notes |
|---|---|---|
| Nuxt | 4 (latest) | Version active, Nuxt 3 EOL juillet 2026 |
| TypeScript | strict | Partout, pas de `any` |
| Tailwind CSS | v4 | Via `@tailwindcss/vite`, PLUS de tailwind.config.js |
| Prisma | v7 | Breaking changes majeurs vs v5/v6 — voir section dédiée |
| PostgreSQL | 16+ | Via `pg` + `@prisma/adapter-pg` |
| nuxt-auth-utils | latest | Sessions cookie chiffrées |
| pnpm | latest | Package manager |

---

## Init projet

```bash
pnpm create nuxt cca-vancia
cd cca-vancia
pnpm add tailwindcss @tailwindcss/vite
pnpm add prisma @prisma/adapter-pg pg
pnpm add -D tsx
pnpm add nuxt-auth-utils
pnpm add zod
pnpm add bcryptjs
pnpm add -D @types/bcryptjs @types/pg
```

---

## Structure du projet (Nuxt 4)
cca-vancia/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css        ← Tailwind + CSS variables du design
│   ├── components/
│   │   ├── Nav.vue
│   │   ├── Footer.vue
│   │   └── admin/
│   │       ├── Shell.vue       ← AdminShell du design
│   │       ├── ManagerHeader.vue
│   │       └── DeleteModal.vue
│   ├── layouts/
│   │   ├── default.vue         ← Page publique (NavBar + Footer)
│   │   └── admin.vue           ← AdminShell (sidebar + main)
│   ├── middleware/
│   │   ├── auth.ts             ← Redirige vers /admin/login si non connecté
│   │   └── guest.ts            ← Redirige vers /admin si déjà connecté
│   └── pages/
│       ├── index.vue
│       ├── tarifs-horaires.vue
│       ├── equipe.vue
│       ├── histoire.vue
│       ├── actualites/
│       │   └── index.vue
│       └── admin/
│           ├── login.vue
│           ├── index.vue       ← Dashboard
│           ├── posts/
│           │   ├── index.vue
│           │   ├── new.vue
│           │   └── [id].vue
│           ├── members/
│           ├── pricing/
│           ├── schedules/
│           └── admins/
├── server/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.post.ts
│   │   │   └── logout.post.ts
│   │   ├── posts/
│   │   │   ├── index.get.ts
│   │   │   ├── index.post.ts
│   │   │   ├── [id].get.ts
│   │   │   ├── [id].put.ts
│   │   │   └── [id].delete.ts
│   │   ├── members/
│   │   ├── pricing/
│   │   ├── schedules/
│   │   ├── admins/
│   │   └── upload.post.ts      ← Upload images
│   ├── middleware/
│   │   └── admin.ts            ← Protège toutes les routes /api/posts, etc.
│   └── utils/
│       └── db.ts               ← Singleton Prisma (auto-importé dans server/)
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/
│   └── uploads/                ← Images uploadées
├── prisma.config.ts
├── nuxt.config.ts
└── .env

---

## Nuxt 4 — Points clés

- Le code app est dans `app/` (pas à la racine comme Nuxt 3)
- `app/assets/css/main.css` contient le `@import "tailwindcss"` + les CSS variables
- Les layouts sont dans `app/layouts/`
- Les pages dans `app/pages/`
- `server/` reste à la racine

```ts
// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-05-01",
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    },
  },
  nitro: {
    storage: {
      uploads: {
        driver: "fs",
        base: "./public/uploads",
      },
    },
  },
})
```

---

## Tailwind CSS v4 — Règles importantes

**PLUS de `tailwind.config.js`**. Toute la config se fait dans le CSS.

```css
/* app/assets/css/main.css */
@import "tailwindcss";

@theme {
  /* Repris exactement du styles.css du design Claude Design */
  --color-bg: #f5efe4;
  --color-surface: #fbf7ef;
  --color-surface-2: #efe7d5;
  --color-paper: #ffffff;
  --color-ink: #2a2520;
  --color-ink-2: #5a4a3a;
  --color-ink-3: #8a7a66;
  --color-line: #e3d9c5;
  --color-line-strong: #c9bca0;
  --color-forest: #3d5a3d;
  --color-forest-deep: #2d4630;
  --color-forest-soft: #e6ede1;
  --color-terracotta: #b85c3c;
  --color-terracotta-deep: #984828;
  --color-terracotta-soft: #f5e3d8;
  --color-danger: #b1432d;
  --color-danger-soft: #f4dbd2;

  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 28px;

  --font-display: "Fraunces", "Source Serif 4", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Les CSS variables du design (`var(--forest)`, `var(--terracotta)`, etc.) sont
utilisées directement dans les composants Vue via `style` inline ou classes CSS.
Ne pas chercher à les mapper en classes Tailwind utilitaires — les garder telles quelles.

---

## Prisma v7 — BREAKING CHANGES critiques

### ❌ JAMAIS (deprecated, casse l'app)
```prisma
generator client {
  provider = "prisma-client-js"  # ❌ CASSE
}
datasource db {
  url = env("DATABASE_URL")      # ❌ CASSE en v7 — URL va dans prisma.config.ts
}
```
```ts
import { PrismaClient } from '@prisma/client'  // ❌ CASSE
```

### ✅ TOUJOURS (pattern v7 correct)

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client"   // ✅
  output   = "./generated"     // ✅
}

datasource db {
  provider = "postgresql"      // ✅ PAS de url ici
}
```

```ts
// prisma.config.ts
import "dotenv/config"
import { defineConfig, env } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: env("DATABASE_URL") },  // ✅ URL ici
})
```

```ts
// server/utils/db.ts  ← auto-importé dans tous les server routes
import { PrismaClient } from "../prisma/generated/client"
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
```

### package.json scripts obligatoires
```json
{
  "scripts": {
    "postinstall": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "db:studio": "prisma studio",
    "db:seed": "tsx prisma/seed.ts"
  }
}
```

---

## Schéma Prisma (DB fraîche PostgreSQL)

```prisma
generator client {
  provider = "prisma-client"
  output   = "./generated"
}

datasource db {
  provider = "postgresql"
}

enum Role {
  ADMIN
  SUPER_ADMIN
}

enum TimeOfDay {
  MORNING
  AFTERNOON
}

model Post {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(255)
  description String   @db.Text
  publishedAt DateTime @map("published_at")
  image       String   @db.VarChar(255)
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@index([publishedAt(sort: Desc)])
  @@map("posts")
}

model Admin {
  id          Int       @id @default(autoincrement())
  username    String    @unique @db.VarChar(255)
  password    String    @db.VarChar(255)
  role        Role      @default(ADMIN)
  lastLoginAt DateTime? @map("last_login_at")
  createdAt   DateTime  @default(now()) @map("created_at")
  updatedAt   DateTime  @updatedAt @map("updated_at")

  @@map("admins")
}

model Member {
  id          Int      @id @default(autoincrement())
  name        String   @db.VarChar(255)
  description String   @db.Text
  photo       String   @db.VarChar(255)
  position    Int
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@index([position])
  @@map("members")
}

model Schedule {
  id        Int       @id @default(autoincrement())
  timeOfDay TimeOfDay @map("time_of_day")
  slot      String    @db.VarChar(20)
  label     String    @db.VarChar(120)
  createdAt DateTime  @default(now()) @map("created_at")
  updatedAt DateTime  @updatedAt @map("updated_at")

  @@index([timeOfDay, slot])
  @@map("schedules")
}

model Pricing {
  id        Int      @id @default(autoincrement())
  label     String   @db.VarChar(30)
  firstDog  Decimal  @db.Decimal(8, 2) @map("first_dog")
  secondDog Decimal  @db.Decimal(8, 2) @map("second_dog")
  perDog    Decimal  @db.Decimal(8, 2) @map("per_dog")
  position  Int
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@index([position])
  @@map("pricing")
}
```

---

## nuxt-auth-utils — Pattern auth

```ts
// server/api/auth/login.post.ts
import { z } from "zod"

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)

  const admin = await db.admin.findUnique({
    where: { username: body.username },
  })

  if (!admin || !(await verifyPassword(admin.password, body.password))) {
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
      role: admin.role,
    },
  })

  return { ok: true }
})
```

```ts
// app/middleware/auth.ts
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()
  if (!loggedIn.value) return navigateTo("/admin/login")
})
```

```ts
// app/middleware/guest.ts
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()
  if (loggedIn.value) return navigateTo("/admin")
})
```

```ts
// server/middleware/admin.ts  ← protège toutes les API sensibles
export default defineEventHandler(async (event) => {
  const url = getRequestURL(event).pathname
  const protectedPaths = ["/api/posts", "/api/members", "/api/pricing",
                          "/api/schedules", "/api/admins"]

  if (protectedPaths.some(p => url.startsWith(p))) {
    const session = await getUserSession(event)
    if (!session.user) {
      throw createError({ status: 401, message: "Non autorisé" })
    }
  }
})
```

```ts
// shared/types/auth.d.ts
declare module "#auth-utils" {
  interface User {
    id: number
    username: string
    role: "ADMIN" | "SUPER_ADMIN"
  }
}
export {}
```

---

## Upload images

```ts
// server/api/upload.post.ts
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session.user) throw createError({ status: 401 })

  const formData = await readMultipartFormData(event)
  if (!formData?.length) throw createError({ status: 400, message: "Aucun fichier" })

  const file = formData[0]
  const ALLOWED = ["image/jpeg", "image/png", "image/webp"]
  const MAX_SIZE = 5 * 1024 * 1024 // 5MB

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
```

---

## Conversion design JSX → Vue SFC

Les fichiers reçus via "Give to Claude Code" sont en JSX React.
Règles de conversion :

- `className` → `class`
- `style={{ ... }}` → `:style="{ ... }"` (camelCase conservé)
- `onClick` → `@click`
- `onChange` → `@change`
- `defaultValue` → `v-model` ou `:value`
- Les `var(--forest)`, `var(--terracotta)` etc. → conserver tels quels en CSS
- `useState` → `ref()` / `reactive()`
- `React.useState` → `const x = ref()`
- Les composants partagés (`NavBar`, `Footer`, `AdminShell`) → layouts Nuxt
- `window.NavBar`, `window.Page` etc. → ignorés, c'est du scaffolding Claude Design
- `ImgOrPH` (placeholder image) → composant `<AppImage>` qui affiche l'img si src existe

---

## Variables d'environnement

```env
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/cca_vancia"
NUXT_SESSION_PASSWORD="au-moins-32-caracteres-aleatoires-ici"
```

---

## .env — Notes

- `NUXT_SESSION_PASSWORD` : minimum 32 caractères. Si absent en dev,
  nuxt-auth-utils en génère un automatiquement.
- `DATABASE_URL` : format PostgreSQL standard.

---

## Seed initial

```ts
// prisma/seed.ts
import "dotenv/config"
import { PrismaClient } from "./generated/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import { hashPassword } from "nuxt-auth-utils/dist/runtime/server/utils/password"

// Note: hashPassword de nuxt-auth-utils n'est pas importable hors Nuxt.
// Utiliser bcryptjs directement dans le seed.
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
```

---

## Rappel des pages à implémenter

### Publiques (layout `default`)
- `/` → `HomePage`
- `/actualites` → `ActualitesPage` (pagination)
- `/tarifs-horaires` → `TarifsPage`
- `/equipe` → `EquipePage`
- `/histoire` → `HistoirePage`

### Admin (layout `admin`, middleware `auth`)
- `/admin` → `AdminDashboardPage`
- `/admin/posts` → `ActualitesManagerPage`
- `/admin/posts/new` → `InsertActualitePage`
- `/admin/posts/[id]` → `EditActualitePage`
- `/admin/members` → `EquipeManagerPage`
- `/admin/members/new` → `InsertEquipierPage`
- `/admin/members/[id]` → `EditEquipierPage`
- `/admin/pricing` → `TarifsManagerPage`
- `/admin/pricing/new` → `InsertTarifPage`
- `/admin/pricing/[id]` → `EditTarifPage`
- `/admin/schedules` → `HorairesManagerPage`
- `/admin/schedules/new` → `InsertHorairePage`
- `/admin/schedules/[id]` → `EditHorairePage`
- `/admin/admins` → `AdminsManagerPage`
- `/admin/admins/new` → `InsertAdminPage`
- `/admin/admins/[id]` → `EditAdminPage`
- `/admin/login` → `AdminLoginPage` (middleware `guest`)