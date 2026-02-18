/*
  Warnings:

  - The `tenant_id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "tenant_id",
ADD COLUMN     "tenant_id" TEXT[];
