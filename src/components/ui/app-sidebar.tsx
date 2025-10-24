"use client";

import {
  BadgeDollarSign,
  BadgePercent,
  CircleUserRound,
  LayoutDashboard,
  LogOut,
  PartyPopper,
  Ticket,
} from "lucide-react";

import { SignoutConfirmation } from "@/app/auth/PopupConfirmation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CustomTrigger } from "./custom-sidebar-trigger";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Event",
    url: "/dashboard/events",
    icon: PartyPopper,
  },
  {
    title: "Voucher",
    url: "/dashboard/vouchers",
    icon: BadgePercent,
  },
  {
    title: "Ticket",
    url: "/dashboard/tickets",
    icon: Ticket,
  },
  {
    title: "Transaction",
    url: "/dashboard/transactions",
    icon: BadgeDollarSign,
  },
  {
    title: "Account",
    url: "#",
    icon: CircleUserRound,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <CustomTrigger />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="my-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="transition-all duration-300 hover:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SignoutConfirmation>
          <SidebarMenuButton
            asChild
            className="hover:bg-destructive cursor-pointer transition-all duration-300 hover:text-white"
          >
            <span>
              <LogOut />
              Sign out
            </span>
          </SidebarMenuButton>
        </SignoutConfirmation>
      </SidebarFooter>
    </Sidebar>
  );
}
