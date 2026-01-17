/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { Home, ShoppingBagIcon, User2, UserPen } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useUser } from '@/src/context/UserProvider';

export function AppSidebar() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='/'>
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* My Profile */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={`/dashboard/${user.role}/my-profile`}>
                    <UserPen />
                    <span>My Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Cart */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={`/dashboard/${user.role}/my-cart`}>
                    <ShoppingBagIcon />
                    <span>Cart</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* ✅ ADMIN ONLY */}
              {user.role === 'admin' && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='/dashboard/admin/all-user'>
                      <User2 />
                      <span>All Users</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
