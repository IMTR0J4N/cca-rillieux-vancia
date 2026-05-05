declare module "#auth-utils" {
  interface User {
    id: number
    username: string
    role: "ADMIN" | "SUPER_ADMIN"
  }
}
export {}
