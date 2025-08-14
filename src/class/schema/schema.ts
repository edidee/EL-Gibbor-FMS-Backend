import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const classes = pgTable('classes', {
  classId: serial('class_id').primaryKey(),
  className: varchar('class_name', { length: 50 }).unique().notNull(),
  classTeacher: varchar('class_teacher', {length:200})
  
});