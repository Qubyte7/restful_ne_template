'use client'

import { useState, useEffect } from 'react'
import { Columns } from "./Columns.tsx"
import { DataTable } from "./Data-table.tsx"
import { type ParkingSession } from '@/components/schemas/schema.ts'
import { Car ,AlignVerticalSpaceAround} from 'lucide-react'
import dayjs from 'dayjs';

function getData(): ParkingSession[] {
    // Fetch data from your API here.
    const date = dayjs().format('YYYY-MM-DD HH:mm')

    return [
        {
            id: 1,
            vehicle:"RAD7502",
            owner:"Innocent",
            email:"test@gmail.com",
            parkingSlot:"A1",
            entryTime: date,
            exitTime: date,
            status:"OUT",
            amount:20
        },
        {
            id: 2,
            vehicle:"RAD7502",
            owner:"Innocent",
            email:"ganza@gmail.com",
            parkingSlot:"A1",
            entryTime: date,
            exitTime: date,
            status:"OUT",
            amount:20
        },
        {
            id: 2,
            vehicle:"RAD7502",
            owner:"Innocent",
            email:"ganza@gmail.com",
            parkingSlot:"A1",
            entryTime: date,
            exitTime: date,
            status:"OUT",
            amount:20
        },
         {
            id: 2,
            vehicle:"RAD7502",
            owner:"Innocent",
            email:"ganza@gmail.com",
            parkingSlot:"A1",
            entryTime: date,
            exitTime: date,
            status:"OUT",
            amount:20
        },
        // ...
    ]
}

export default function ParkingSessionPage() {
    const [data, setData] = useState<ParkingSession[]>([])
    const [slots,setSlots] = useState<number>();
    const [carNumber,setCarNumber] = useState<number>();

    useEffect(() => {
        // Fetch data when component mounts
        const fetchedData = getData()
        setData(fetchedData)
        setSlots(12)
        setCarNumber(10)
    }, [])

    return (
        // <DashboardLayout>
            <div className="w-full flex-col flex pt-10  justify-center">
                <div className='flex gap-5'>
                    <div className=' p-10 border-2 flex items-center gap-2 bg-amber-100 border-amber-400 rounded-md'>
                        <AlignVerticalSpaceAround size={30} className='text-amber-400'/>
                        <p className='text-amber-400 font-bold'>available slots <span className='text-2xl'>{slots}</span> </p>

                    </div>
                   <div className=' p-10 border-2 flex items-center gap-2 bg-teal-100 border-teal-600 rounded-md'>
                        <Car size={30} className='text-teal-600'/>
                        <p className='text-teal-600 font-bold'>car <span className='text-2xl'>{carNumber}</span> </p>
                    </div>  
                </div>

            <div className="container flex-1  ">
                <DataTable columns={Columns} data={data} />
            </div>
            </div>
        // </DashboardLayout>
    )
}
