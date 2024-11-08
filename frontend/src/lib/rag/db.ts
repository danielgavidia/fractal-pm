"use server";

import { Pool } from "pg";

// Initialize the database connection pool asynchronously
export const pool = async () => {
  return new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 15432,
    database: "ragdemo",
  });
};

// Initialize the database with required extensions and tables
export async function initializeDatabase() {
  const client = await (await pool()).connect();
  try {
    // Enable vector extension
    await client.query("CREATE EXTENSION IF NOT EXISTS vector");

    // Create documents table
    await client.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        embedding vector(1536)
      )`);
  } finally {
    client.release();
  }

  // don't do this in production
  await client.query("DELETE FROM documents");
}
