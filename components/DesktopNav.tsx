'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface NavItem {
  href?: string
  label: string
  submenu?: NavItem[]
}

interface DesktopNavProps {
  navItems: NavItem[]
  transparent?: boolean
}

export function DesktopNav({ navItems, transparent = false }: DesktopNavProps) {
  const pathname = usePathname()
  
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navItems.map((item, index) => {
        const isActive = item.href === pathname
        const hasActiveSubmenu = item.submenu?.some(subItem => 
          subItem.href === pathname || subItem.submenu?.some(nested => nested.href === pathname)
        )
        
        return (
          <div key={index}>
            {item.href ? (
              <Link 
                href={item.href} 
                className={cn(
                  "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-foreground focus:text-foreground focus:outline-none text-foreground/80",
                  transparent && "text-white hover:bg-white/10 hover:text-white",
                  isActive && !transparent && "bg-accent font-semibold text-foreground",
                  isActive && transparent && "bg-white/10 font-semibold text-white"
                )}
              >
                {item.label}
              </Link>
            ) : item.submenu ? (
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-foreground focus:text-foreground focus:outline-none text-foreground/80",
                  transparent && "text-white hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white",
                  hasActiveSubmenu && !transparent && "bg-accent font-semibold text-foreground",
                  hasActiveSubmenu && transparent && "bg-white/10 font-semibold text-white"
                )}>
                  {item.label}
                  <ChevronDown className="relative top-[1px] ml-1 h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[400px] p-4">
                  <ul className="grid gap-3">
                    {item.submenu.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        item={subItem}
                        pathname={pathname}
                      />
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </div>
        )
      })}
    </nav>
  )
}

function ListItem({ item, pathname }: { item: NavItem; pathname: string }) {
  // Если у элемента есть вложенное подменю
  if (item.submenu) {
    return (
      <li>
        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-base font-medium leading-none mb-2">{item.label}</div>
          <ul className="space-y-1 pl-4 border-l-2 border-border/50">
            {item.submenu.map((nestedItem, nestedIndex) => {
              const isActive = nestedItem.href === pathname
              return (
                <li key={nestedIndex}>
                  <Link
                    href={nestedItem.href || '#'}
                    className={cn(
                      "block select-none rounded-md px-3 py-2.5 text-base leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground",
                      isActive && "bg-accent/70 font-semibold"
                    )}
                  >
                    {nestedItem.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </li>
    )
  }

  // Обычный элемент с ссылкой
  const isActive = item.href === pathname
  return (
    <li>
      <Link
        href={item.href || '#'}
        className={cn(
          "block select-none space-y-1 rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          isActive && "bg-accent font-semibold"
        )}
      >
        <div className="text-base font-medium leading-none">{item.label}</div>
      </Link>
    </li>
  )
}

