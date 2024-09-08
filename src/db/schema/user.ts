import { timestamp, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
    id: serial('id').primaryKey(),
    createdAt: timestamp("created_at").notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type