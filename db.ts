import pg from "pg"
import { drizzle } from "drizzle-orm/node-postgres";
import 'dotenv/config'

import { products, productRelations } from "@/db/schema/products";
import { varieties, varietiesRelations, seasonEnum } from "@/db/schema/varieties";

const { Client } = pg
const client = new Client(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASENAME,
        port: Number(process.env.DB_PORT),
    }
)

client.connect()

const db = drizzle(client, {schema: {products, productRelations, varieties, varietiesRelations}});

export default db;