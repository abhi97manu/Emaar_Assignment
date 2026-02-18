/*
  Warnings:

  - The primary key for the `Tenants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tenants` table. All the data in the column will be lost.
  - Added the required column `tenant_id` to the `Tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TenantsToUser" DROP CONSTRAINT "_TenantsToUser_A_fkey";

-- AlterTable
ALTER TABLE "Tenants" DROP CONSTRAINT "Tenants_pkey",
DROP COLUMN "id",
ADD COLUMN     "tenant_id" INTEGER NOT NULL,
ADD CONSTRAINT "Tenants_pkey" PRIMARY KEY ("tenant_id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tenant_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "_TenantsToUser" ADD CONSTRAINT "_TenantsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tenants"("tenant_id") ON DELETE CASCADE ON UPDATE CASCADE;
