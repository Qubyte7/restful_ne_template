import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { useDeleteParkingSession, useUpdateParkingSession } from '@/hooks/useParkingSession';
import { toast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
import { type ParkingSession } from "@/components/schemas/schema"



import { cn } from "@/lib/utils"
import type { VehichleSessionstatus } from "@/components/schemas/schema"

const ActionCell = ({ session }: { session: ParkingSession }) => {
  const deleteSession = useDeleteParkingSession();
  const updateSession = useUpdateParkingSession();

  const handleDelete = async (id: number) => {
    try {
      await deleteSession.mutateAsync(id);
      toast({
        title: "Success",
        description: "Parking session deleted successfully",
        variant: "default",
      });
    } catch (error) {
      console.error(error);
      
      toast({
        title: "Error",
        description: "Failed to delete parking session",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = async (id: number) => {
    try {
      await updateSession.mutateAsync({
        id,
        data: {
          exit_time: new Date().toISOString(),
          status: 'OUT'
        }
      });
      toast({
        title: "Success",
        description: "Car checked out successfully",
        variant: "default",
      });
    } catch (error) {
      console.error(error);
      
      toast({
        title: "Error",
        description: "Failed to checkout car",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Action menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => handleDelete(session.id)}
          className="text-red-400"
        >
          Delete Session
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {session.status === "PARKING" && (
          <DropdownMenuItem onClick={() => handleCheckout(session.id)}>
            Car Checkout
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        {session.status == "PARKING" ? (<DropdownMenuItem>Update session</DropdownMenuItem>) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Columns: ColumnDef<ParkingSession>[] = [
  {
    accessorKey: "owner",
    header: "Driver",
  },
  {
    accessorKey: "vehicle",
    header: "car Plate",
  }, {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "parkingSlot",
    header: "Slot",
  }, {
    accessorKey: "entryTime",
    header: "Entry Time",
  },
  {
    accessorKey: "exitTime",
    header: "Exit Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original
      const badgeColor = callTypes.get(status)
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', badgeColor)}>
            {row.getValue('status')}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,


  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const session =  row.original;
      return <ActionCell session={session} />;
    }
  }
]




// vehichle session status badge Color specification

export const callTypes = new Map<VehichleSessionstatus, string>([
  ['PARKING', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['OUT', 'bg-neutral-300/40 border-neutral-300'],

])

