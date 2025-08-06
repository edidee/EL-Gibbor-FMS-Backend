import { pgEnum, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { statusEnum } from "./enum";

export const students = pgTable('students', {

    id : serial('id').primaryKey(),
    admission_number: varchar('admission_number').unique(),
    first_name: varchar("first_name").notNull(),
    last_name: varchar("last_name").notNull(),
    status: statusEnum('status').notNull().default("ACTIVE"),
    guardian_name: varchar("parent-guardian_name").notNull(),
    guardian_phone_number: varchar("parent_guardian_phone_number").notNull()
})


