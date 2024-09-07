import { timestamp, pgTable, serial, text, integer, boolean, doublePrecision, pgEnum } from 'drizzle-orm/pg-core';

import { products } from './products';
import { relations } from 'drizzle-orm';

export const seasonEnum = pgEnum('season', ['Verano', 'Otoño', 'Invierno', "Primavera"]);

export const varieties = pgTable('varieties', {
    id: serial('id').primaryKey(),
    createdAt: timestamp("created_at").notNull(),
    productId: integer("product_id").references(() => products.id).notNull(),
    img_src: text('img_src').notNull(),
    name: text('name').notNull(),
    season: text('season').notNull(),
    availability: boolean("availability").notNull(),
    description: text("description").notNull(),
    price: doublePrecision("price").notNull() 
});

export const varietiesRelations = relations(varieties, ({ one }) => ({
    product: one(products, { fields: [varieties.productId], references: [products.id] }),
  }));
  

export type variety = typeof varieties.$inferSelect; // return type when queried
export type NewVariety = typeof varieties.$inferInsert; // insert type