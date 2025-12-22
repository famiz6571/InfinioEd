import type { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  LogOut,
  BookOpen,
  ShoppingCart,
  Heart,
  MessageSquare,
  Bell,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileMenuItem from "@/components/ProfileMenuItem";
import LanguageDropdown from "@/components/LanguageDropdown";

interface ProfileMenuProps {
  initials: string;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ initials }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleNavigate = (path: string) => navigate(path);

  // 🔔 Replace with real state / API later
  const notificationCount = 3;
  const messageCount = 7;

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
        className="w-64 p-1 shadow-lg rounded-md"
      >
        {/* USER HEADER */}
        <ProfileMenuItem
          icon={
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-black font-semibold dark:bg-gray-700 dark:text-white">
              {initials}
            </div>
          }
          label={`${user.firstName} ${user.lastName}`}
          description={user.email}
          onClick={() => handleNavigate("/userprofile")}
        />

        <DropdownMenuSeparator />

        {/* INFINO ED */}
        <DropdownMenuLabel className="px-4 text-gray-400 text-xs uppercase">
          INFINO ED
        </DropdownMenuLabel>

        <ProfileMenuItem
          icon={<BookOpen size={16} />}
          label="My Learning"
          onClick={() => handleNavigate("/my-learning")}
        />
        <ProfileMenuItem
          icon={<ShoppingCart size={16} />}
          label="My Cart"
          onClick={() => handleNavigate("/my-cart")}
        />
        <ProfileMenuItem
          icon={<Heart size={16} />}
          label="Wishlist"
          onClick={() => handleNavigate("/wishlist")}
        />
        <ProfileMenuItem
          icon={<User size={16} />}
          label="Teach on INFINO ED"
          onClick={() => handleNavigate("/teach")}
        />

        <DropdownMenuSeparator />

        {/* NOTIFICATIONS */}
        <DropdownMenuLabel className="px-4 text-gray-400 text-xs uppercase">
          Notifications
        </DropdownMenuLabel>

        <ProfileMenuItem
          icon={<Bell size={16} />}
          label="Notifications"
          badgeCount={notificationCount}
          onClick={() => handleNavigate("/notifications")}
        />
        <ProfileMenuItem
          icon={<MessageSquare size={16} />}
          label="Messages"
          badgeCount={messageCount}
          onClick={() => handleNavigate("/messages")}
        />

        <DropdownMenuSeparator />

        {/* ACCOUNT */}
        <DropdownMenuLabel className="px-4 text-gray-400 text-xs uppercase">
          Account
        </DropdownMenuLabel>

        <ProfileMenuItem
          icon={<CreditCard size={16} />}
          label="Payment Methods"
          onClick={() => handleNavigate("/payment-methods")}
        />
        <ProfileMenuItem
          icon={<User size={16} />}
          label="Subscriptions"
          onClick={() => handleNavigate("/subscriptions")}
        />
        <ProfileMenuItem
          icon={<BookOpen size={16} />}
          label="Purchase History"
          onClick={() => handleNavigate("/purchase-history")}
        />
        <ProfileMenuItem
          icon={<CreditCard size={16} />}
          label="INFINO ED Credits"
          onClick={() => handleNavigate("/infinioed-credits")}
        />

        <DropdownMenuSeparator />

        {/* LANGUAGE */}
        <DropdownMenuLabel className="px-4 text-gray-400 text-xs uppercase">
          Language
        </DropdownMenuLabel>

        <LanguageDropdown />

        <DropdownMenuSeparator />

        {/* SIGN OUT */}
        <ProfileMenuItem
          icon={<LogOut size={16} />}
          label="Sign Out"
          danger
          onClick={logout}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
