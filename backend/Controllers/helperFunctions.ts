import prisma from "../config/prismaClientConfig";
const prismaUser = prisma.client;
const prismaVehicle = prisma.vehicle_details;
const prismaSlot = prisma.parkingSlot;

export const verifyDriverExists = async (email: string) => {
  const driver = await prismaUser.findUnique({ where: { email } });
  if (!driver) throw new Error("Driver does not exist!");
  return driver; // Return the driver if found
};


export const verifyVehicleByNumberPlate = async(numberPlate:string)=>{
            const vehicle =  await prismaVehicle.findUnique({where: {vehicle_plate: numberPlate}});
            if (!vehicle) throw new Error("Vehicle not Found");
}

export const verifyParkingSlot =  async(slot:number){
    const parkingSlot = await prismaSlot.findUnique({where:{id:slot}});
    if(!parkingSlot) throw new Error("parking slot not Found")

}