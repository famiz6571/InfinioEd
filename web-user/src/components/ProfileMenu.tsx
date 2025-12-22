import type { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Settings, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ProfileMenuProps {
  initials: string;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ initials }) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="w-10 h-10 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30 flex items-center justify-center"
        >
          {initials || <User size={18} />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 p-1 shadow-lg rounded-md"
      >
        {/* Optional: Show name/email at top */}
        <div className="px-4 py-2 border-b border-white/20">
          <p className="text-sm font-semibold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-300 truncate">{user.email}</p>
        </div>

        <DropdownMenuItem className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-white/10">
          <Settings size={16} /> Account Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 px-4 py-3 rounded-md text-red-500 hover:bg-white/10"
          onClick={logout}
        >
          <LogOut size={16} /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
