/*
  Warnings:

  - You are about to drop the column `slotNumber` on the `parking_slots` table. All the data in the column will be lost.
  - Added the required column `slot_number` to the `parking_slots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "parking_slots" DROP COLUMN "slotNumber",
ADD COLUMN     "slot_number" INTEGER NOT NULL;
