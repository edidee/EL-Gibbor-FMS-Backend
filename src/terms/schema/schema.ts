import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { sessions}  from 'src/session/schema/schema'
import { termEnum } from "./term.enum";

export const terms = pgTable('terms', {
  id: serial('id').primaryKey(),
  termName: termEnum('status').notNull(),
  academicSessionId: integer('academic_session_id').notNull().references(() => sessions.id),
  
});