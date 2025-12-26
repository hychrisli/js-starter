import sqlite3 from 'sqlite3';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';

const directory = dirname(fileURLToPath(import.meta.url));
const db = new sqlite3.Database(join(directory, 'db.sqlite'));

export function initDb() {
  const schema = fs.readFileSync(
    join(directory, 'schema.sql'),
    'utf8'
  );

  db.exec(schema, (err) => {
    if (err) {
      console.error("Failed to load schema: ", err.message);
    } else {
      console.log("Database tables initialized successfully.");
    }
  });

  const stmt = db.prepare("INSERT INTO users (username, email) VALUES (?, ?)");
  const randomName = faker.person.firstName();
  const randomNumber = faker.number.bigInt();
  const randomEmail = faker.internet.email();
  stmt.run(randomName + randomNumber, randomEmail);
  stmt.finalize();;

  db.each(`SELECT id, username, email 
    FROM users 
    ORDER BY created 
    DESC LIMIT 3`, (err, row) => {
    console.log(`${row.id}: ${row.username} -- ${row.email}`);
  });

}
