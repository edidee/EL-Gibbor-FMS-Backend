CREATE TABLE "session" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_name" varchar,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	CONSTRAINT "session_session_name_unique" UNIQUE("session_name")
);
--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "admission_number" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "first_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "last_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "parent-guardian_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "parent_guardian_phone_number" SET DATA TYPE varchar;