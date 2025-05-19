/*
  Warnings:

  - You are about to drop the `ParkingSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ParkingSession" DROP CONSTRAINT "ParkingSession_owner_email_fkey";

-- DropForeignKey
ALTER TABLE "ParkingSession" DROP CONSTRAINT "ParkingSession_parking_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "ParkingSession" DROP CONSTRAINT "ParkingSession_vehicle_number_plate_fkey";

-- DropTable
DROP TABLE "ParkingSession";

-- CreateTable
CREATE TABLE "parking_session" (
    "id" SERIAL NOT NULL,
    "vehicle_number_plate" TEXT NOT NULL,
    "parking_slot_id" INTEGER NOT NULL,
    "owner_email" TEXT NOT NULL,
    "ower_name" TEXT NOT NULL,
    "entry_time" TIMESTAMP(3) NOT NULL,
    "exit_time" TIMESTAMP(3) NOT NULL,
    "vehicle_status" "VehiclesessionStatus" NOT NULL,

    CONSTRAINT "parking_session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "parking_session" ADD CONSTRAINT "parking_session_vehicle_number_plate_fkey" FOREIGN KEY ("vehicle_number_plate") REFERENCES "vehicle_details"("vehicle_plate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_session" ADD CONSTRAINT "parking_session_parking_slot_id_fkey" FOREIGN KEY ("parking_slot_id") REFERENCES "parking_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_session" ADD CONSTRAINT "parking_session_owner_email_fkey" FOREIGN KEY ("owner_email") REFERENCES "client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
