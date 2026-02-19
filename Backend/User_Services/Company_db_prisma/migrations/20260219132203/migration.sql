-- CreateTable
CREATE TABLE "Tasks" (
    "task_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "assigned_to" INTEGER NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("task_id")
);
