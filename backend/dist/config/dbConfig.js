"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: process.env.DB_USER || 'your_user',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'peminjaman_barang',
    password: process.env.DB_PASS || 'your_password',
    port: Number(process.env.DB_PORT) || 5432,
});
//# sourceMappingURL=dbConfig.js.map