/*
  Warnings:

  - Added the required column `ower_name` to the `ParkingSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingSession" ADD COLUMN     "ower_name" TEXT NOT NULL;
