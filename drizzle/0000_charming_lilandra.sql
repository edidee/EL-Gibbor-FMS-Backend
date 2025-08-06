CREATE TABLE "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"admission_number" text,
	"first_name" text,
	"last_name" text,
	"status" "status" NOT NULL,
	"parent-guardian_name" text,
	"parent_guardian_phone_number" text,
	CONSTRAINT "students_admission_number_unique" UNIQUE("admission_number")
);
