import { Home, Inbox } from "lucide-react"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

//menu items
const AdminItems = [
    {
        title: "Home",
        url: "/dashboard/parking-sessions",
        icon: Home,
    },
    {
        title: "Vehicle Management",
        url: "/dashboard/admin-vehicle-management",
        icon: Inbox,
    },

]
const UserItems = [
        {
        title: "Vehicle Management",
        url: "/dashboard/vehicle-management",
        icon: Inbox,
    },
]

export function AppSidebar() {
    const { logout, user } = useAuth();
    const { isAdmin } = useAuth();

    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleItemClick = (title: string) => {
        setActiveButton(title);
    };

    const items = isAdmin ? AdminItems : UserItems;

    return (
        <Sidebar>
            <SidebarContent className="justify-between">
                 <span className="mr-4">Welcome, {user?.username} </span>
                <SidebarGroup >
                    <SidebarGroupLabel>Car Parking Management</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                           
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}   >
                                    <SidebarMenuButton asChild onClick={() => handleItemClick(item.title)} isActive={activeButton === item.title}>
                                        <a href={item.url}
                                            className={cn(
                                                BASE_STYLES,
                                                HOVER_STYLES,
                                                FOCUS_STYLES,
                                                activeButton === item.title && ACTIVE_STYLES
                                            )}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={logout} className="hover:text-red-500 hover:bg-red-200">
                                <p>Logout</p>
                            </SidebarMenuButton>

                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}


//defining some custom styles
const BASE_STYLES = `
  group 
  flex 
  w-full 
  items-center 
  rounded-md 
  border 
  border-transparent 
  p-2 
  text-sm 
  font-medium 
  transition-all 
  duration-200 
  ease-in-out
`;

// Define state-specific styles
const HOVER_STYLES = 'hover:bg-gray-100 hover:text-gray-900';
const FOCUS_STYLES = 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
const ACTIVE_STYLES = 'bg-[#5D5D5D] text-primary-foreground';