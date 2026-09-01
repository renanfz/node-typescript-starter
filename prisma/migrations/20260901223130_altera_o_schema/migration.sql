/*
  Warnings:

  - A unique constraint covering the columns `[ra]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_ra_key" ON "User"("ra");
