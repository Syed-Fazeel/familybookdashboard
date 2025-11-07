import {
  LayoutDashboard,
  Building2,
  Users,
  Calendar,
  FolderTree,
  Megaphone,
  BarChart3,
  FileText,
  Bell,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "wouter";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Businesses",
    url: "/admin/businesses",
    icon: Building2,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: Calendar,
  },
  {
    title: "Categories",
    url: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Ads & Promotions",
    url: "/admin/ads",
    icon: Megaphone,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "CMS",
    url: "/admin/cms",
    icon: FileText,
  },
  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold text-foreground">Family Book Admin</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
