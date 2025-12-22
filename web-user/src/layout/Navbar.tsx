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
import AuthDialog from "@/components/common/AuthDialog";

const Navbar: FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-0.5 font-medium transition-colors duration-200
    ${
      isActive
        ? "text-white after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
        : "text-white/80 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:rounded-full hover:after:w-full after:transition-all after:duration-300"
    }`;

  // Define nav links in an array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-primary dark:bg-gray-900 text-white transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-lg">
          INIFINOED
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggleButton />
          </li>
          <li>
            <AuthDialog />
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
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <NavLink to={link.path} className={linkClass}>
                    {link.name}
                  </NavLink>
                </DropdownMenuItem>
              ))}
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
