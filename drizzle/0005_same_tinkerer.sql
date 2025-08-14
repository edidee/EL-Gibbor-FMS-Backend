CREATE TABLE "standard_fees" (
	"id" serial PRIMARY KEY NOT NULL,
	"term_id" integer NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"session_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "terms" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "termName" NOT NULL,
	"academic_session_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "standard_fees" ADD CONSTRAINT "standard_fees_term_id_terms_id_fk" FOREIGN KEY ("term_id") REFERENCES "public"."terms"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "standard_fees" ADD CONSTRAINT "standard_fees_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "terms" ADD CONSTRAINT "terms_academic_session_id_sessions_id_fk" FOREIGN KEY ("academic_session_id") REFERENCES "public"."sessions"("id") ON DELETE no action ON UPDATE no action;