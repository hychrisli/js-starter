import sqlite3 from 'sqlite3';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const db = new sqlite3.Database('./db.sqlite');

export function initDb() {
  const schema = fs.readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), 'schema.sql'),
    'utf8'
  );

  db.exec(schema, (err) => {
    if (err) {
      console.error("Failed to load schema: ", err.message);
    } else {
      console.log("Database tables initialized successfully.");
    }
  });
}
