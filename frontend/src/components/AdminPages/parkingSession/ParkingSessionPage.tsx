'use client'

import { useState } from 'react'
import { Columns } from "./Columns.tsx"
import { DataTable } from "./Data-table.tsx"
import { Car, AlignVerticalSpaceAround } from 'lucide-react'
import { useParkingSession, useAvailableSlots, useParkedCarsCount } from '@/hooks/useParkingSession'
import { Button } from '@/components/ui/button'

export default function ParkingSessionPage() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    
    // Use the custom hooks
    const { 
        data, 
        isLoading, 
        isError, 
        error 
    } = useParkingSession({ page, limit });
    
    const { data: slotsData } = useAvailableSlots();
    const { data: carsData } = useParkedCarsCount();
    console.log(carsData);
    
    // Handle pagination
    const handleNextPage = () => {
        if (data?.pagination.hasNextPage) {
            setPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (data?.pagination.hasPreviousPage) {
            setPage(prev => prev - 1);
        }
    };

    // Show loading state
    if (isLoading) {
        return (
            <div className="w-full flex-col flex pt-10 justify-center items-center">
                <p>Loading parking sessions...</p>
            </div>
        );
    }

    // Show error state
    if (isError) {
        return (
            <div className="w-full flex-col flex pt-10 justify-center items-center">
                <p className="text-red-500">Error loading parking sessions: {error.message}</p>
                <Button onClick={() => window.location.reload()} className="mt-4">
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full flex-col flex pt-10 justify-center">
            <div className='flex gap-5'>
                <div className='p-10 border-2 flex items-center gap-2 bg-amber-100 border-amber-400 rounded-md'>
                    <AlignVerticalSpaceAround size={30} className='text-amber-400'/>
                    <p className='text-amber-400 font-bold'>available slots <span className='text-2xl'>{slotsData?.count || 0}</span> </p>
                </div>
                <div className='p-10 border-2 flex items-center gap-2 bg-teal-100 border-teal-600 rounded-md'>
                    <Car size={30} className='text-teal-600'/>
                    <p className='text-teal-600 font-bold'>car <span className='text-2xl'>{carsData?.count || 0}</span> </p>
                </div>  
            </div>

            <div className="container flex-1">
                <DataTable 
                    columns={Columns} 
                    data={data?.sessions || []} 
                />
            </div>
            
            {/* Custom pagination controls if needed */}
            <div className="flex justify-between items-center mt-4">
                <div>
                    Showing page {data?.pagination.currentPage || 1} of {data?.pagination.totalPages || 1}
                </div>
                <div className="flex gap-2">
                    <Button 
                        onClick={handlePrevPage}
                        disabled={!data?.pagination.hasPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button 
                        onClick={handleNextPage}
                        disabled={!data?.pagination.hasNextPage}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}