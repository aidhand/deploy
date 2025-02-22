import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),

  email: varchar().notNull().unique(),
  firstName: varchar(),
  lastName: varchar(),

  createdAt: timestamp().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  tokens: many(tokens),
}));

export const tokens = pgTable("tokens", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid().notNull(),

  token: varchar().notNull().unique(),

  createdAt: timestamp().defaultNow(),
  expiresAt: timestamp().notNull(),
});

export const tokensRelations = relations(tokens, ({ one }) => ({
  user: one(users, {
    fields: [tokens.userId],
    references: [users.id],
  }),
}));
