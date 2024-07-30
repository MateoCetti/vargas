import { relations } from 'drizzle-orm';
import { timestamp, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { varieties } from './varieties';

export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    createdAt: timestamp("created_at").notNull(),
    image: text('img_src').notNull(),
    name: text('name').notNull(),
});

// export const productRelations = relations(products, ({ many }) => ({
//     varieties: many(varieties),
//   }));

export type product = typeof products.$inferSelect; // return type when queried
export type NewProduct = typeof products.$inferInsert; // insert type