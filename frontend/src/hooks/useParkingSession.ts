import { useQuery,useQueryClient,useMutation } from '@tanstack/react-query';
import api from '../api/axios';
import { type ParkingSession } from '@/components/schemas/schema';

// Define the response type from the backend
interface ParkingSessionResponse {
  success: boolean;
  message: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: {
    id: number;
    vehicle_number_plate: string;
    parking_slot_id: number;
    owner_email: string;
    ower_name: string;
    entry_time: string;
    exit_time: string | null;
    status: 'PARKING' | 'OUT';
  }[];
}

// Define the parameters for the hook
interface ParkingSessionParams {
  page?: number;
  limit?: number;
}

export const useParkingSession = ({ page = 1, limit = 10 }: ParkingSessionParams = {}) => {
  return useQuery<ParkingSessionResponse, Error, { 
    sessions: ParkingSession[],
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      pageSize: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    }
  }>({
    queryKey: ['parkingSessions', page, limit],
    queryFn: async () => {
      const response = await api.get<ParkingSessionResponse>(`/parking-session?page=${page}&limit=${limit}`);
      return response.data;
    },
    select: (data) => {
      // Transform the backend data to match the frontend schema
      const sessions = data.data.map(session => ({
        id: session.id,
        vehicle: session.vehicle_number_plate,
        owner: session.ower_name,
        email: session.owner_email,
        parkingSlot: `Slot ${session.parking_slot_id}`, // Format as needed
        entryTime: new Date(session.entry_time).toLocaleString(),
        exitTime: session.exit_time ? new Date(session.exit_time).toLocaleString() : 'Not exited',
        status: session.status,
        amount: 20, // You might want to calculate this based on entry/exit time
      }));

      return {
        sessions,
        pagination: {
          currentPage: data.currentPage,
          totalPages: data.totalPages,
          totalItems: data.totalItems,
          pageSize: data.pageSize,
          hasNextPage: data.hasNextPage,
          hasPreviousPage: data.hasPreviousPage,
        }
      };
    },
  });
};

// Additional hook for getting available slots count
export const useAvailableSlots = () => {
  return useQuery<{ count: number }, Error>({
    queryKey: ['availableSlots'],
    queryFn: async () => {
      // You'll need to create this endpoint in your backend
      const response = await api.get('/parking-slots/available');
      return response.data;
    },
    // Default value if the endpoint doesn't exist yet
    placeholderData: { count: 12 },
  });
};

// Additional hook for getting parked cars count
export const useParkedCarsCount = () => {
  return useQuery<{ count: number }, Error>({
    queryKey: ['parkedCars'],
    queryFn: async () => {
      // You can use the existing endpoint with a filter
      const response = await api.get('/parking-session/by-vehicle-status', {
        data: { vehicleStatus: 'PARKING' }
      });
      return { count: response.data.data.length };
    },
    // Default value if the endpoint doesn't exist yet
    placeholderData: { count: 10 },
  });
};

export const useAddParkingSession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newSession: {
      vehicle_number_plate: string;
      driver_name: string;
      driver_email: string;
      parking_slot_id: number;
      entry_time: string;
    }) => {
      const response = await api.post('/parking-session', newSession);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['parkingSessions'] });
      queryClient.invalidateQueries({ queryKey: ['availableSlots'] });
      queryClient.invalidateQueries({ queryKey: ['parkedCars'] });
    },
  });
};

// Delete a parking session
export const useDeleteParkingSession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/parking-session/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parkingSessions'] });
      queryClient.invalidateQueries({ queryKey: ['availableSlots'] });
      queryClient.invalidateQueries({ queryKey: ['parkedCars'] });
    },
  });
};

// Update a parking session (e.g., for checkout)
export const useUpdateParkingSession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Record<string, unknown> }) => {
      const response = await api.put(`/parking-session/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parkingSessions'] });
      queryClient.invalidateQueries({ queryKey: ['availableSlots'] });
      queryClient.invalidateQueries({ queryKey: ['parkedCars'] });
    },
  });
};


