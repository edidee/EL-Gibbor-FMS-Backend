import { decimal, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { students } from "src/student/schema/schema";
import { sessions } from "src/session/schema/schema";
import { terms } from "src/terms/schema/schema";


export const extraFeeTypes = pgTable('extra_fee_types', {
  id: serial('extra_fee_type_id').primaryKey(),
  name: varchar('name', { length: 50 }).unique().notNull(),
});

export const extraFeesAssigned = pgTable('extra_fees_assigned', {
  assignedFeeId: serial('assigned_fee_id').primaryKey(),
  studentId: integer('student_id').references(() => students.id).notNull(),
  extraFeeTypeId: integer('extra_fee_type_id').references(() => extraFeeTypes.id).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  termId: integer('term_id').references(() => terms.id).notNull(),
  sessionId: integer('session_id').references(() => sessions.id).notNull(),
});