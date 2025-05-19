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
import { type addParkingSession,addParkingSessionSchema } from "@/components/schemas/schema";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useAddParkingSession } from "@/hooks/useParkingSession";
import { toast } from "@/hooks/use-toast";


// Define an array of slot names (10 slots)
const parkingSlots = Array.from({ length: 10 }, (_, index) => `Slot ${index + 1}`);



export const AddNewSessionPage = () => {
    const form = useForm<addParkingSession>({ // Use addParkingSession here
        resolver: zodResolver(addParkingSessionSchema),
        defaultValues: {
            vehicle_plate: "",
            owner: "",
            email: "",
            parkingSlot: "",
            entryTime: "",
        },
    });
    const [date, setDate] = useState<Date>();

    // Initialize the useAddParkingSession hook
    const addParkingSession = useAddParkingSession();

    function onSubmit(values: addParkingSession) {
        console.log(values);

        // Extract the slot number from the parkingSlot string (e.g., "Slot 5" -> 5)
        const slotNumberMatch = values.parkingSlot.match(/\d+/);
        const slotNumber = slotNumberMatch ? parseInt(slotNumberMatch[0], 10) : 1;

        // Transform the form data to match the expected structure in the hook
        const transformedData = {
            vehicle_number_plate: values.vehicle_plate,
            driver_name: values.owner,
            driver_email: values.email,
            parking_slot_id: slotNumber,
            entry_time: values.entryTime || (date ? date.toISOString() : new Date().toISOString()),
        };

        // Call the mutation function with the transformed data
        addParkingSession.mutate(transformedData, {
            onSuccess: () => {
                toast({
                    title: "Success",
                    description: "Parking session added successfully",
                    variant: "default",
                });
                form.reset();
            },
            onError: (error) => {
                console.error(error);
                toast({
                    title: "Error",
                    description: "Failed to add parking session",
                    variant: "destructive",
                });
            }
        });
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
                        name="vehicle_plate"
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
                    <FormField
                        control={form.control}
                        name="entryTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Entry Time</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
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
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={(selectedDate) => {
                                                setDate(selectedDate);
                                                if (selectedDate) {
                                                    field.onChange(selectedDate.toISOString());
                                                }
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </div>

    )
}
