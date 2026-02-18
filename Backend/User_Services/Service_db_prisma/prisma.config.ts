import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "Service_db_prisma/schema.prisma",
  migrations: {
    path: "Service_db_prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("SERVICE_DATABASE_URL"),
  },
});
