import { pgEnum } from "drizzle-orm/pg-core";

export const termEnum = pgEnum('termName', ['First', 'Second', 'Third']);