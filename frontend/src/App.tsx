import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "@/pages/Login.tsx";
import { Register } from "@/pages/Register.tsx";
import { PageNotFound } from "@/pages/Page-not-found.tsx";
import ParkingSessionPage from "@/components/AdminPages/parkingSession/ParkingSessionPage.tsx";
import VehicleManagementPage from "./components/AdminPages/vehicleManagement/VehicleManagementPage";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import { AddNewSessionPage } from "./components/AdminPages/parkingSession/AddNewSessionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="parking-sessions" element={<ParkingSessionPage />} />
              <Route path="parking-sessions/add-session" element={<AddNewSessionPage />} />
              <Route path="vehicle-management" element={<VehicleManagementPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
