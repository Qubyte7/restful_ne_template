import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button.tsx";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type ParkingSession, parkingSessionSchema } from "@/components/schemas/schema";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";


// Define an array of slot names (10 slots)
const parkingSlots = Array.from({ length: 10 }, (_, index) => `Slot ${index + 1}`);



export const AddNewSessionPage = () => {
    const form = useForm<ParkingSession>({
        resolver: zodResolver(parkingSessionSchema),
        defaultValues: {
            vehicle: "",
            owner: "",
            email: "",
            parkingSlot: "",
            entryTime: "",
            exitTime: "",
            status: "PARKING",
            amount: 0
        },
    });
    const [date, setDate] = useState<Date>()

    function onSubmit(values: ParkingSession) {
        console.log(values);
    }

    return (

        <div className="shadow-md p-10 w-[50%] items-center justify-center max-h-[fit-content] rounded-md">
            <div className="flex items-center justify-center">
               <p className="text-2xl font-semibold">ADD New Session</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="vehicle"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Vehicle Number Plate</FormLabel>
                                <FormControl>
                                    <Input placeholder="RV *** 7" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="owner"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Owner Name</FormLabel>
                                <FormControl>
                                    <Input placeholder=" John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Owner email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Moo@yahoo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="parkingSlot"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Parking Slot</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a parking slot" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {parkingSlots.map(slot => (
                                            <SelectItem key={slot} value={slot}>
                                                {slot}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Date selector */}
                     <FormLabel>Entry Time</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    


                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </div>

    )
}
