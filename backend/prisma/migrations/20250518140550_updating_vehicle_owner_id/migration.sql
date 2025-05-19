/*
  Warnings:

  - You are about to drop the column `owner_Id` on the `vehicle_details` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `vehicle_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "vehicle_details" DROP CONSTRAINT "vehicle_details_owner_Id_fkey";

-- AlterTable
ALTER TABLE "vehicle_details" DROP COLUMN "owner_Id",
ADD COLUMN     "owner_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "vehicle_details" ADD CONSTRAINT "vehicle_details_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
