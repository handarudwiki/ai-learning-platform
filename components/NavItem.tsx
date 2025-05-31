
"use client"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


const NavItems = [
    {label : "Home", href: "/"},
    {label : "Companions", href: "/companions"},
    {label : "My Journey", href: "/my-journey"},
]

const NavItem = () => {
    const pathname = usePathname()

  return (
    <nav className="flex items-center gap-4">
        {NavItems.map(({label, href}) => (
            <a 
                key={label} 
                href={href} 
                className= {cn(pathname ===  href && "text-primary font-semibold")}
            >
                {label}
            </a>
        ))}
    </nav>
  )
}

export default NavItem