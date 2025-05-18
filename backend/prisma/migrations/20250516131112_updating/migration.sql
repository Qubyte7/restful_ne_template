/*
  Warnings:

  - Added the required column `owner_email` to the `ParkingSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingSession" ADD COLUMN     "owner_email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ParkingSession" ADD CONSTRAINT "ParkingSession_owner_email_fkey" FOREIGN KEY ("owner_email") REFERENCES "client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
