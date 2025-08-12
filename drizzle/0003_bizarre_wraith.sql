CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_name" varchar,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	CONSTRAINT "sessions_session_name_unique" UNIQUE("session_name")
);
--> statement-breakpoint
DROP TABLE "session" CASCADE;