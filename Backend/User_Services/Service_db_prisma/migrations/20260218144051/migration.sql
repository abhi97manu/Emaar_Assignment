/*
  Warnings:

  - You are about to drop the column `tenantId` on the `Tenants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tenants" DROP CONSTRAINT "Tenants_tenantId_fkey";

-- AlterTable
ALTER TABLE "Tenants" DROP COLUMN "tenantId";

-- CreateTable
CREATE TABLE "_TenantsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TenantsToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TenantsToUser_B_index" ON "_TenantsToUser"("B");

-- AddForeignKey
ALTER TABLE "_TenantsToUser" ADD CONSTRAINT "_TenantsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TenantsToUser" ADD CONSTRAINT "_TenantsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
