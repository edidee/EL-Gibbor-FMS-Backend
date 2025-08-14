import { decimal, integer, pgTable, serial } from "drizzle-orm/pg-core";
import { terms } from "src/terms/schema/schema";
import { sessions } from 'src/session/schema/schema'

export const standardFees = pgTable('standard_fees', {
  id: serial('id').primaryKey(),
  termId: integer('term_id').notNull().references(() => terms.id),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  sessionId: integer('session_id').references(() => sessions.id).notNull(),
});