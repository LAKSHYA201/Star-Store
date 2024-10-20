#! /usr/bin/env node
const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const SQL = `
CREATE TABLE aircrafts(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255)
);

CREATE TABLE devices(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255)
);

CREATE TABLE movies(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255)
);
INSERT INTO aircrafts (name) VALUES ('X-Wing Starfighter'),('Tie Fighter'),('A-Wing'),('Arc-170'),('Star Destroyer');
INSERT INTO devices (name) VALUES ('N-69 Starpath Unit'),('Holocron Machine'),('Lightsaber'),('Sith Wayfinder');
INSERT INTO movies(name) VALUES ('A new hope'),('The Empire Strikes Back'),('Return of the Jedi'),('The Phantom Menace'),('Attack Of The Clones'),('Revenge of the Sith')
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}
main();
