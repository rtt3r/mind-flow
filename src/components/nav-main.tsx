import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavigationItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavigationSubItem[];
}

interface NavigationSubItem {
  title: string;
  url: string;
}

interface NavMainProps {
  items: NavigationItem[];
}

export const NavMain = ({ items }: NavMainProps) => {
  const location = useLocation();

  const isActiveRoute = (item: NavigationItem): boolean | undefined => {
    return (
      item.url === location.pathname ||
      (item.items ?? []).some((item) => item.url === location.pathname)
    );
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) =>
          !item.items?.length ? (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) => (isActive ? 'text-blue' : '')}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActiveRoute(item)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={subItem.url}
                            className={({ isActive }) =>
                              isActive ? 'text-blue' : ''
                            }
                          >
                            <span>{subItem.title}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};
