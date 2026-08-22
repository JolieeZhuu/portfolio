"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function NavBar() {
    const pathname = usePathname();
    const navItems = [
        { name: "About Me", href: "/about-me" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
    ];

    return (
        <div className="border shadow-md rounded-md">
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink
                                        render={<Link href={item.href} />}
                                        active={isActive}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "text-base px-8 transition-colors duration-200 text-[var(--accent)] bg-[var(--background)] hover:text-black",
                                            
                                            isActive 
                                                ? "focus:bg-[var(--background)] hover:bg-[var(--background)]" 
                                                : "text-muted-foreground hover:text-foreground text-[#CCCCCC]"
                                        )}
                                    >
                                        {item.name}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        })
                    }
                    {/* <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link href="/about-me" />}
                            className={`text-base px-8`}
                        >
                            About Me
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link href="/projects" />}
                            className={"text-base px-8"}
                        >
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link href="/skills" />}
                            className={"text-base px-8"}
                        >
                            Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem> */}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}