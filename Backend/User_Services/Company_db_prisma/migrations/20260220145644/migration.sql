/*
  Warnings:

  - A unique constraint covering the columns `[workflow_name]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Workflow_workflow_name_key" ON "Workflow"("workflow_name");
