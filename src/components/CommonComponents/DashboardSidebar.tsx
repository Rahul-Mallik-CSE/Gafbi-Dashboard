/** @format */
"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Box,
  CloudUpload,
  Headset,
  List,
  LogOut,
  Truck,
  User,
} from "lucide-react";

export default function DashboardSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  const isCollapsed = state === "collapsed";

  const navItems = [
    {
      href: "/",
      icon: List,
      label: "Overview",
    },
    {
      href: "/manage-gafbi-box",
      icon: Box,
      label: "Manage Gafbi box",
    },
    {
      href: "/manage-delivery-address",
      icon: Truck,
      label: "Manage delivery address",
    },
    {
      href: "/personal-data",
      icon: User,
      label: "Personal data",
    },
    {
      href: "/login-data",
      icon: CloudUpload,
      label: "Login data",
    },
    {
      href: "/customer-service",
      icon: Headset,
      label: "Customer service",
    },
    {
      href: "/unsubscribe",
      icon: LogOut,
      label: "Unsubscribe",
    },
  ];

  if (
    pathname == "/sign-in" ||
    pathname == "/sign-up" ||
    pathname == "/create-new-pass" ||
    pathname == "/reset-pass" ||
    pathname == "/verify-email" ||
    pathname == "/verify-otp"
  )
    return null;

  return (
    <Sidebar
      className={cn(
        "py-0 border-none bg-transparent",
        isCollapsed ? "px-1" : "px-0",
      )}
      collapsible="icon"
    >
      <SidebarContent
        className={cn(
          "h-full bg-card text-primary border-none px-3 pt-4 pb-6 rounded-r-2xl",
          isCollapsed ? "px-1" : "",
        )}
      >
        <div className={cn("mb-5", isCollapsed ? "px-0" : "px-1")}>
          <Link
            href="/"
            className={cn(
              "flex items-start",
              isCollapsed ? "justify-center" : "gap-2.5",
            )}
          >
            {!isCollapsed && (
              <div className="pt-0.5">
                <p className="text-sm font-semibold leading-none text-primary">
                  Gafbi Health Care
                </p>
              </div>
            )}
          </Link>
        </div>

        {!isCollapsed && (
          <div className="mb-4 px-1">
            <p className="text-[17px] font-semibold leading-tight text-primary">
              Alex Morgan
            </p>
            <p className="mt-0.5 text-[11px] leading-tight text-tertiary">
              alexmorgan86@gmail.com
            </p>
          </div>
        )}

        <SidebarMenu
          className={cn(
            "space-y-1",
            isCollapsed ? "items-center px-0" : "px-0",
          )}
        >
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname?.startsWith(item.href + "/")
              }
              collapsed={isCollapsed}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed?: boolean;
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed = false,
}: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={cn(
            collapsed
              ? "flex size-10 items-center justify-center rounded-lg transition-colors"
              : "flex h-10 items-center gap-2.5 rounded-md px-3 text-sm transition-colors",
            active
              ? "bg-background text-primary hover:text-primary! hover:bg-background/90!"
              : "text-primary/90  hover:bg-background/60! hover:text-primary!",
          )}
        >
          <Icon size={17} strokeWidth={1.75} />
          {!collapsed && (
            <span className="text-[15px] font-medium">{label}</span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
