ALTER TABLE "students" ALTER COLUMN "first_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "last_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "parent-guardian_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "parent_guardian_phone_number" SET NOT NULL;