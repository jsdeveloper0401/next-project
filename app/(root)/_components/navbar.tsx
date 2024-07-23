"use client";
import ModToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobalSearch from "./global-search";
import Mobile from "./mobile";

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname);
    
    return (
        <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
            <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-creteRound">Max</h1>
                </Link>
                {/*  nav links */}
                <div className="gap-2 hidden md:flex">
                    {navLinks.map((nav) => (
                        <Link
                            key={nav.route}
                            href={nav.route}
                            className={cn(
                                "hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors",
                                pathname === nav.route && "text-blue-400"
                            )}>
                            {nav.name}
                        </Link>
                    ))}
                </div>
                {/*  search */}
                <div className="flex items-center gap-1">
                    <GlobalSearch/>
                    <ModToggle/>
                    <Mobile/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;