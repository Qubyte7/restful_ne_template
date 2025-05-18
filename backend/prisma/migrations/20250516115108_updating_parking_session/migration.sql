/*
  Warnings:

  - You are about to drop the column `status` on the `ParkingSession` table. All the data in the column will be lost.
  - Added the required column `vehicle_status` to the `ParkingSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingSession" DROP COLUMN "status",
ADD COLUMN     "vehicle_status" "VehiclesessionStatus" NOT NULL;
