import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "@/pages/Login.tsx";
import { Register } from "@/pages/Register.tsx";
import { PageNotFound } from "@/pages/Page-not-found.tsx";
import ParkingSessionPage from "@/components/AdminPages/parkingSession/ParkingSessionPage.tsx";
import VehicleManagementPage from "./components/AdminPages/vehicleManagement/VehicleManagementPage";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import { AddNewSessionPage } from "./components/AdminPages/parkingSession/AddNewSessionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useAuth, AuthProvider } from "./context/AuthContext";
import type React from "react";
import { Toaster } from "@/components/ui/toaster";
import UserPages from "./components/UserPages/UserPages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {

  const ProtectedRoute = ({ children, requireAdmin = false }: { children: React.ReactNode, requireAdmin: boolean }) => {
    const { isAuthenticated, isAdmin } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    if (requireAdmin && !isAdmin) {
      return <Navigate to="/dashboard/vehicle-management" />;
    }
    
    return children;
  };

  // Admin-only route component
  const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    return <ProtectedRoute requireAdmin={true}>{children}</ProtectedRoute>;
  };

  return (


    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/dashboard" element={<ProtectedRoute requireAdmin={false} ><DashboardLayout /></ProtectedRoute>}>
                <Route path="parking-sessions" element={<AdminRoute><ParkingSessionPage /></AdminRoute>} />
                <Route path="parking-sessions/add-session" element={<AdminRoute><AddNewSessionPage /></AdminRoute>} />
                <Route path="admin-vehicle-management" element={<AdminRoute><VehicleManagementPage /></AdminRoute> } />
                <Route path="vehicle-management" element={<UserPages/>}/>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
          <Toaster/>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
