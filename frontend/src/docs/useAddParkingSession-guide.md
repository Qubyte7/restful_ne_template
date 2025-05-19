# Guide: How to Use useAddParkingSession Hook

This guide explains how to use the `useAddParkingSession` hook to add new parking sessions in your application.

## Basic Usage

1. Import the hook:
```tsx
import { useAddParkingSession } from "@/hooks/useParkingSession";
```

2. Initialize the hook in your component:
```tsx
const addParkingSession = useAddParkingSession();
```

3. Prepare your data in the correct format:
```tsx
const newSessionData = {
  vehicle_number_plate: "ABC123", // The vehicle's license plate
  driver_name: "John Doe",        // The name of the driver/owner
  driver_email: "john@example.com", // The email of the driver/owner
  parking_slot_id: 5,             // The ID of the parking slot (number)
  entry_time: new Date().toISOString(), // The entry time as ISO string
};
```

4. Call the mutation function with your data:
```tsx
addParkingSession.mutate(newSessionData, {
  onSuccess: () => {
    // Handle success (e.g., show a success message, reset form)
    console.log("Parking session added successfully");
  },
  onError: (error) => {
    // Handle error (e.g., show an error message)
    console.error("Failed to add parking session:", error);
  }
});
```

## Complete Example with React Hook Form

Here's a complete example using React Hook Form:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddParkingSession } from "@/hooks/useParkingSession";
import { addParkingSessionSchema, type addParkingSession } from "@/components/schemas/schema";

export const AddNewSessionForm = () => {
  // Initialize the form
  const form = useForm<addParkingSession>({
    resolver: zodResolver(addParkingSessionSchema),
    defaultValues: {
      vehicle_plate: "",
      owner: "",
      email: "",
      parkingSlot: "",
      entryTime: "",
    },
  });

  // Initialize the hook
  const addParkingSession = useAddParkingSession();

  // Handle form submission
  function onSubmit(values: addParkingSession) {
    // Extract the slot number from the parkingSlot string (e.g., "Slot 5" -> 5)
    const slotNumberMatch = values.parkingSlot.match(/\d+/);
    const slotNumber = slotNumberMatch ? parseInt(slotNumberMatch[0], 10) : 1;
    
    // Transform the form data to match the expected structure in the hook
    const transformedData = {
      vehicle_number_plate: values.vehicle_plate,
      driver_name: values.owner,
      driver_email: values.email,
      parking_slot_id: slotNumber,
      entry_time: values.entryTime || new Date().toISOString(),
    };
    
    // Call the mutation function with the transformed data
    addParkingSession.mutate(transformedData, {
      onSuccess: () => {
        console.log("Parking session added successfully");
        form.reset();
      },
      onError: (error) => {
        console.error("Failed to add parking session:", error);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Your form fields here */}
      <button type="submit">Add Parking Session</button>
    </form>
  );
};
```

## Important Notes

1. **Data Transformation**: Make sure to transform your form data to match the expected structure of the API:
   - `vehicle_plate` → `vehicle_number_plate`
   - `owner` → `driver_name`
   - `email` → `driver_email`
   - `parkingSlot` → `parking_slot_id` (extract the number if it's a string like "Slot 5")
   - `entryTime` → `entry_time` (ensure it's in ISO string format)

2. **Loading State**: You can check if the mutation is in progress:
   ```tsx
   {addParkingSession.isPending && <p>Adding parking session...</p>}
   ```

3. **Error Handling**: Always handle potential errors:
   ```tsx
   {addParkingSession.isError && <p>Error: {addParkingSession.error.message}</p>}
   ```

4. **Success Handling**: Provide feedback on successful operations:
   ```tsx
   {addParkingSession.isSuccess && <p>Parking session added successfully!</p>}
   ```

5. **Reset**: After a successful submission, consider resetting your form:
   ```tsx
   if (addParkingSession.isSuccess) {
     form.reset();
   }
   ```

## API Reference

The `useAddParkingSession` hook returns a mutation object with the following properties:

- `mutate`: Function to trigger the mutation
- `isPending`: Boolean indicating if the mutation is in progress
- `isError`: Boolean indicating if the mutation resulted in an error
- `isSuccess`: Boolean indicating if the mutation was successful
- `error`: The error object if the mutation failed
- `data`: The data returned from the mutation if successful