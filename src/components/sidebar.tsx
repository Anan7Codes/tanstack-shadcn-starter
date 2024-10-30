import { Car, ChevronDown, ShieldQuestion, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from '@tanstack/react-router'
import { SidebarFooter } from "./ui/sidebar"



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel> 
            <ChevronDown className="mr-2" />
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className=''>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/home" preload="intent">
                        <Car />
                        <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/home2" preload="intent">
                        <User />
                        <span>Home 2</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <hr />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/home2" preload="intent">
                  <ShieldQuestion />
                  <span>Footer Button</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
