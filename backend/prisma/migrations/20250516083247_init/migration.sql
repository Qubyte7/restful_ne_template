-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN', 'OUT');

-- CreateTable
CREATE TABLE "vehicle_details" (
    "id" SERIAL NOT NULL,
    "owner_Id" INTEGER NOT NULL,
    "car_plate" TEXT NOT NULL,
    "vehicle_model_name" TEXT NOT NULL,
    "entry_time" TIMESTAMP(3) NOT NULL,
    "exits_time" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "charged_amount" DECIMAL(65,30) NOT NULL,
    "clientId" INTEGER,

    CONSTRAINT "vehicle_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_details_car_plate_key" ON "vehicle_details"("car_plate");

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "vehicle_details" ADD CONSTRAINT "vehicle_details_owner_Id_fkey" FOREIGN KEY ("owner_Id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
