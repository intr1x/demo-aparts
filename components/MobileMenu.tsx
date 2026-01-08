'use client'

import { Phone, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

// Анимированная иконка бургер-меню
function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
          isOpen && "rotate-45 translate-y-[7px]"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
          isOpen && "opacity-0 scale-0"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
          isOpen && "-rotate-45 -translate-y-[7px]"
        )}
      />
    </div>
  )
}

interface NavItem {
  href?: string
  label: string
  submenu?: NavItem[]
}

interface MobileMenuProps {
  navItems: NavItem[]
  phone?: string
  transparent?: boolean
}

function MobileNavItem({ item, onClose, pathname }: { item: NavItem; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState(false)

  // Если есть прямая ссылка без подменю
  if (item.href) {
    const isActive = item.href === pathname
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={cn(
          "text-xl font-medium hover:text-foreground/80 transition-all hover:translate-x-1 rounded-lg px-3 py-2.5 -mx-3",
          isActive && "text-primary font-bold bg-accent/50"
        )}
      >
        {item.label}
      </Link>
    )
  }

  // Если есть подменю
  if (item.submenu) {
    const hasActiveSubmenu = item.submenu.some(subItem => 
      subItem.href === pathname || subItem.submenu?.some(nested => nested.href === pathname)
    )
    
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "text-xl font-medium hover:text-foreground/80 transition-all flex items-center justify-between rounded-lg px-3 py-2.5 -mx-3 w-full",
            hasActiveSubmenu && "text-primary font-bold bg-accent/50"
          )}
        >
          {item.label}
          <ChevronDown 
            className={`h-6 w-6 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        {expanded && (
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-border/50 mt-2">
            {item.submenu.map((subItem, subIndex) => (
              <MobileSubItem key={subIndex} item={subItem} onClose={onClose} pathname={pathname} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}

function MobileSubItem({ item, onClose, pathname }: { item: NavItem; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState(false)

  // Если есть вложенное подменю
  if (item.submenu) {
    const hasActiveNested = item.submenu.some(nested => nested.href === pathname)
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "text-lg font-medium hover:text-foreground/80 transition-all flex items-center justify-between",
            hasActiveNested && "text-primary font-bold"
          )}
        >
          {item.label}
          <ChevronDown 
            className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        {expanded && (
          <div className="flex flex-col gap-2 pl-4 border-l border-border/50">
            {item.submenu.map((nestedItem, nestedIndex) => {
              const isActive = nestedItem.href === pathname
              return (
                <Link
                  key={nestedIndex}
                  href={nestedItem.href || '#'}
                  onClick={onClose}
                  className={cn(
                    "text-base font-medium hover:text-foreground/80 transition-all rounded-lg px-2.5 py-2 -mx-2.5",
                    isActive && "text-primary font-bold bg-accent/50"
                  )}
                >
                  {nestedItem.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // Обычный элемент подменю
  const isActive = item.href === pathname
  return (
    <Link
      href={item.href || '#'}
      onClick={onClose}
      className={cn(
        "text-lg font-medium hover:text-foreground/80 transition-all rounded-lg px-3 py-2 -mx-3",
        isActive && "text-primary font-bold bg-accent/50"
      )}
    >
      {item.label}
    </Link>
  )
}

export function MobileMenu({ navItems, phone, transparent = false }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <button
          className={cn(
            "p-2 rounded-md transition-colors cursor-pointer",
            transparent ? "text-white hover:bg-white/10" : "hover:bg-accent"
          )}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <AnimatedMenuIcon isOpen={open} />
        </button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-sm overflow-y-auto top-20 h-[calc(100vh-5rem)] [&>button]:hidden"
        overlayClassName="top-20"
      >
        <SheetTitle className="sr-only">Навигационное меню</SheetTitle>
        <nav className="flex flex-col gap-2 pt-6">
          {navItems.map((item, index) => (
            <MobileNavItem 
              key={index} 
              item={item} 
              onClose={() => setOpen(false)}
              pathname={pathname}
            />
          ))}
        </nav>

        {phone && (
          <div className="mt-10 pt-6 border-t">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-sm font-medium hover:text-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {phone}
            </a>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

