import { pgTable, unique, uuid, varchar, timestamp, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const tokens = pgTable("tokens", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	token: varchar().notNull(),
	userId: uuid().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	expiresAt: timestamp({ mode: 'string' }).notNull(),
}, (table) => [
	unique("tokens_token_unique").on(table.token),
]);

export const users = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	email: varchar({ length: 255 }).notNull(),
	name: varchar({ length: 255 }).notNull(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);
