import { date, index, pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const sessions = pgTable('sessions', {
    id : serial('id').primaryKey().unique(),
    sessionName: varchar('session_name').unique(),
    startDate: date("start_date").notNull(),
    endDate: date("end_date").notNull(),
}, (sessions) => ({
    sessionNameIndex: index('session_index').on(sessions.sessionName)
}))