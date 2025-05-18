
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import { Outlet } from "react-router-dom";

// {children}:{children: React.ReactNode}
const DashboardLayout = () => {
    return (
        <div>
        <SidebarProvider>
          <AppSidebar/>
                <SidebarTrigger/>
            <main className="flex flex-1 px-5 justify-center ">
                <Outlet/>
            </main>

</SidebarProvider>
</div>
    )
}
export default DashboardLayout
