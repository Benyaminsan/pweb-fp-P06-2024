import { Pool } from 'pg';

export const pool = new Pool({
  user: process.env.DB_USER || 'your_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'peminjaman_barang',
  password: process.env.DB_PASS || 'your_password',
  port: Number(process.env.DB_PORT) || 5432,
});
