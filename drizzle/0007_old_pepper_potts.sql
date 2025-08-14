CREATE TABLE "classes" (
	"class_id" serial PRIMARY KEY NOT NULL,
	"class_name" varchar(50) NOT NULL,
	"class_teacher" varchar(200),
	CONSTRAINT "classes_class_name_unique" UNIQUE("class_name")
);
