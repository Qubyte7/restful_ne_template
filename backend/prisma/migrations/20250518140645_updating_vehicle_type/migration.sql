/*
  Warnings:

  - You are about to drop the column `vehicle_Type` on the `vehicle_details` table. All the data in the column will be lost.
  - Added the required column `vehicle_type` to the `vehicle_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vehicle_details" DROP COLUMN "vehicle_Type",
ADD COLUMN     "vehicle_type" TEXT NOT NULL;
