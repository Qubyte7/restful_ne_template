import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';

// Example hook for fetching parking sessions (admin only)
export const useParkingSessions = () => {
  return useQuery({
    queryKey: ['parkingSessions'],
    queryFn: async () => {
      const response = await api.get('/parking-sessions');
      return response.data.data;
    },
  });
};

// Example hook for fetching vehicles (accessible by both users and admins)
export const useVehicles = () => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: async () => {
      const response = await api.get('/vehicles');
      return response.data.data;
    },
  });
};

// Example hook for adding a new parking session (admin only)
export const useAddParkingSession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (sessionData) => {
      return api.post('/parking-sessions', sessionData);
    },
    onSuccess: () => {
      // Invalidate and refetch the parking sessions query
      queryClient.invalidateQueries({ queryKey: ['parkingSessions'] });
    },
  });
};

// Add more hooks as needed for your application