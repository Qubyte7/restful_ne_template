import {z} from 'zod'



// export type ParkingSession = {
//   id: number
//   vehicle: string
//   owner: string
//   email: string,
//   parkingSlot: string
//   entryTime: string
//   exitTime: string
//   status: "OUT" | "PARKING"
//   amount: number
// }

export const parkingSessionSchema = z.object({
    id:z.number(),
    vehicle:z.string(),
    owner:z.string().min(2,{message:"Client must have at least Characters"}),
    email:z.string().email({message:"valid email required"}),
    parkingSlot:z.string(),
    entryTime:z.string(),
    exitTime:z.string(),
    status:z.string(),
    amount:z.number()
})

export type ParkingSession =  z.infer<typeof parkingSessionSchema>;




export const vehichlestatusSchema = z.union([
    z.literal('OUT'),
    z.literal('PARKING')
])

export type VehichleSessionstatus = z.infer<typeof vehichlestatusSchema>
