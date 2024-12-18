import { useIsMobile } from '@/components/hooks/use-mobile';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { NavLink, useLocation, useMatches } from 'react-router-dom';

const ITEMS_TO_DISPLAY = 2;

export const Breadcrumbs = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const matches = useMatches();
  const location = useLocation();

  const crumbs: { id: string; href: string; label: string }[] = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => !!match.handle)
    .map((match) => {
      return {
        id: match.id,
        href: match.pathname,
        label: (match.handle as any).crumb.title,
      };
    });

  const [first, ...rest] = crumbs;
  const lastItems = rest.slice(-ITEMS_TO_DISPLAY);
  const middle = rest.slice(0, -ITEMS_TO_DISPLAY);

  const isLastBreadcrumb =
    crumbs.length > 0 && location.pathname === crumbs[crumbs.length - 1].href;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* First Breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink href={first.href}>{first.label}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {/* Ellipsis and Dropdown/Drawer */}
        {rest.length > ITEMS_TO_DISPLAY && (
          <>
            <BreadcrumbItem>
              {!isMobile ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {middle.map((item) => (
                      <DropdownMenuItem key={item.id}>
                        <NavLink to={item.href ? item.href : '#'}>
                          {item.label}
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {middle.map((item) => (
                        <NavLink
                          key={item.id}
                          to={item.href ? item.href : '#'}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {/* Last 3 Breadcrumbs */}
        {lastItems.map((item) => (
          <BreadcrumbItem key={item.id}>
            {!isLastBreadcrumb ? (
              <BreadcrumbLink
                className="max-w-20 truncate md:max-w-none"
                href={item.href}
              >
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
