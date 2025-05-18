import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

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
      const session = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(session.parkingSlot)}
              className="text-red-400"
            >
              Delete Session
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {session.status == "PARKING" ? (<DropdownMenuItem>Update session</DropdownMenuItem>) : null}
            <DropdownMenuSeparator />
            {session.status == "PARKING" ? (<DropdownMenuItem>Car Checkout</DropdownMenuItem>) : null}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

// vehichle session status badge Color specification

export const callTypes = new Map<VehichleSessionstatus, string>([
  ['PARKING', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['OUT', 'bg-neutral-300/40 border-neutral-300'],

])

