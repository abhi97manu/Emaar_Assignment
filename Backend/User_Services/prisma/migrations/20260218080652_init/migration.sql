-- CreateTable
CREATE TABLE "User" (
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "empId" INTEGER NOT NULL,
    "company" TEXT NOT NULL DEFAULT 'Company A',
    "role" TEXT
);

-- CreateTable
CREATE TABLE "Admin" (
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "empId" INTEGER NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Admin'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_empId_key" ON "User"("empId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_empId_key" ON "Admin"("empId");
