"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { Car, LayoutDashboard, Settings, CalendarDays, CarIcon } from "lucide-react"
import {logout} from "@/actions/logout"

const menuItems =[
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        title: "Catalogue",
        url: "/voitures",
        icon: Car,
    },

    {
        title: "Mes réservations",
        url: "/reservation",
        icon: CalendarDays,
    },

    {
        title: "Mes achats",
        url: "/achat",
        icon: Settings,
    },

    {
        title: "Paramètre",
        url: "/settings",
        icon: CalendarDays,
    }
]



export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader />
      <SidebarContent >
        <SidebarGroup />
            <SidebarMenu>
                {menuItems.map( (items) => 
                <SidebarMenuItem key={items.title}>
                    <SidebarMenuButton asChild>
                        <a href={items.url}>
                            <items.icon/>
                           <span>{items.title}</span>
                            
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                )}
            </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton onClick={async () => await logout()}>Se déconnecter</SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}