import { index, pgEnum, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { statusEnum } from "./enum";

export const students = pgTable('students', {

    id : serial('id').primaryKey(),
    admissionNumber: varchar('admission_number').unique(),
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    status: statusEnum('status').notNull().default("ACTIVE"),
    guardianName: varchar("parent-guardian_name").notNull(),
    guardianPhoneNumber: varchar("parent_guardian_phone_number").notNull()
}, (students) => ({
    admissionNumberIndex: index('student_index').on(students.admissionNumber)
}))


