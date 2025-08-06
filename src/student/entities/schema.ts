import { pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";
import { statusEnum } from "./enum";

export const students = pgTable('students', {

    id : serial('id').primaryKey(),
    admission_number: text('admission_number').unique(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    status: statusEnum('status').notNull().default("ACTIVE"),
    guardian_name: text("parent-guardian_name").notNull(),
    guardian_phone_number: text("parent_guardian_phone_number").notNull()
})


