import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-0.5 font-medium transition-colors duration-200
    ${
      isActive
        ? "text-white after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
        : "text-white/80 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:rounded-full hover:after:w-full after:transition-all after:duration-300"
    }`;

  return (
    <header className="bg-primary dark:bg-gray-900 text-white transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-lg">
          INIFINOED
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={linkClass}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
          </li>
          <Button
            variant="default"
            className="
              bg-white/20 text-white
              dark:bg-white/10 dark:text-white
              border-none
              hover:bg-white/40 dark:hover:bg-white/30
              transition-colors duration-200
            "
          >
            Sign In
          </Button>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem asChild>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/courses" className={linkClass}>
                  Courses
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink to="/blog" className={linkClass}>
                  Blog
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <ThemeToggleButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
