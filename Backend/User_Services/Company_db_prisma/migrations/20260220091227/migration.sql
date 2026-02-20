/*
  Warnings:

  - You are about to drop the column `role` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_name` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workflow_id` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Role_role_key";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "role",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "status",
DROP COLUMN "title",
ADD COLUMN     "state_name" TEXT NOT NULL,
ADD COLUMN     "workflow_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Workflow" (
    "id" SERIAL NOT NULL,
    "workflow_name" TEXT NOT NULL,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workflow_Rules" (
    "id" SERIAL NOT NULL,
    "workflow_id" INTEGER NOT NULL,
    "state_1" TEXT NOT NULL,
    "state_2" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "Workflow_Rules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_workflow_id_fkey" FOREIGN KEY ("workflow_id") REFERENCES "Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "User"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workflow_Rules" ADD CONSTRAINT "Workflow_Rules_workflow_id_fkey" FOREIGN KEY ("workflow_id") REFERENCES "Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
