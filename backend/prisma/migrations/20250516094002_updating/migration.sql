/*
  Warnings:

  - You are about to drop the column `car_plate` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `charged_amount` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `entry_time` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `exits_time` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_model_name` on the `vehicle_details` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[vehicle_plate]` on the table `vehicle_details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle_Type` to the `vehicle_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle_plate` to the `vehicle_details` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('INUSE', 'FREE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "VehiclesessionStatus" AS ENUM ('PARKING', 'OUT');

-- DropIndex
DROP INDEX "vehicle_details_car_plate_key";

-- AlterTable
ALTER TABLE "client" ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "vehicle_details" DROP COLUMN "car_plate",
DROP COLUMN "charged_amount",
DROP COLUMN "clientId",
DROP COLUMN "entry_time",
DROP COLUMN "exits_time",
DROP COLUMN "status",
DROP COLUMN "vehicle_model_name",
ADD COLUMN     "vehicle_Type" TEXT NOT NULL,
ADD COLUMN     "vehicle_plate" TEXT NOT NULL;

-- DropTable
DROP TABLE "admin";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "parking_slots" (
    "id" SERIAL NOT NULL,
    "slotNumber" INTEGER NOT NULL,
    "status" "SlotStatus" NOT NULL,

    CONSTRAINT "parking_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkingSession" (
    "id" SERIAL NOT NULL,
    "vehicle_number_plate" TEXT NOT NULL,
    "parking_slot_id" INTEGER NOT NULL,
    "entry_time" TIMESTAMP(3) NOT NULL,
    "exit_time" TIMESTAMP(3) NOT NULL,
    "status" "VehiclesessionStatus" NOT NULL,

    CONSTRAINT "ParkingSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_details_vehicle_plate_key" ON "vehicle_details"("vehicle_plate");

-- AddForeignKey
ALTER TABLE "ParkingSession" ADD CONSTRAINT "ParkingSession_vehicle_number_plate_fkey" FOREIGN KEY ("vehicle_number_plate") REFERENCES "vehicle_details"("vehicle_plate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingSession" ADD CONSTRAINT "ParkingSession_parking_slot_id_fkey" FOREIGN KEY ("parking_slot_id") REFERENCES "parking_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
