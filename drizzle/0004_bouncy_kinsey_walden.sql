CREATE INDEX "session_index" ON "sessions" USING btree ("session_name");--> statement-breakpoint
CREATE INDEX "student_index" ON "students" USING btree ("admission_number");--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_id_unique" UNIQUE("id");