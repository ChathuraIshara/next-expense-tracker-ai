import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Create a PostgreSQL pool using your DATABASE_URL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Pass the pool to PrismaPg to create the adapter
const adapter = new PrismaPg(pool);

// Create PrismaClient with the adapter
const db = new PrismaClient({
  adapter,
});

export default db;
