import { date, decimal, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { sessions } from "src/session/schema/schema"
import { students} from "src/student/schema/schema"
import {terms } from "src/terms/schema/schema"

export const payments = pgTable('payments', {
  id: serial('payment_id').primaryKey(),
  studentId: integer('student_id').references(() => students.id).notNull(),
  Date: date('payment_date').notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  category: varchar('category', { length: 50 }), 
  method: varchar('method', { length: 50 }),     
  termId: integer('term_id').references(() => terms.id).notNull(),
  sessionId: integer('session_id').references(() => sessions.id).notNull(),
});