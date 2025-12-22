import type { FC, JSX } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
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
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {
  initials: string;
}

interface MenuItem {
  label: string;
  icon: JSX.Element;
  path?: string;
  onClick?: () => void;
  badgeCount?: number; // ✅ NEW
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const ProfileMenu: FC<ProfileMenuProps> = ({ initials }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleNavigate = (path: string) => navigate(path);

  // 🔔 Example counts (replace with API/state later)
  const notificationCount = 3;
  const messageCount = 7;

  const menuSections: MenuSection[] = [
    {
      items: [
        {
          label: `${user.firstName} ${user.lastName}`,
          icon: (
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-black font-semibold dark:bg-gray-700 dark:text-white">
              {initials}
            </div>
          ),
          onClick: () => handleNavigate("/userprofile"),
        },
      ],
    },
    {
      title: "INFINO ED",
      items: [
        {
          label: "My Learning",
          icon: <BookOpen size={16} />,
          path: "/my-learning",
        },
        {
          label: "My Cart",
          icon: <ShoppingCart size={16} />,
          path: "/my-cart",
        },
        { label: "Wishlist", icon: <Heart size={16} />, path: "/wishlist" },
        {
          label: "Teach on INFINO ED",
          icon: <User size={16} />,
          path: "/teach",
        },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          label: "Notifications",
          icon: <Bell size={16} />,
          path: "/notifications",
          badgeCount: notificationCount, // 🔴
        },
        {
          label: "Messages",
          icon: <MessageSquare size={16} />,
          path: "/messages",
          badgeCount: messageCount, // 🔵
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          label: "Payment Methods",
          icon: <CreditCard size={16} />,
          path: "/payment-methods",
        },
        {
          label: "Subscriptions",
          icon: <User size={16} />,
          path: "/subscriptions",
        },
        {
          label: "Purchase History",
          icon: <BookOpen size={16} />,
          path: "/purchase-history",
        },
        {
          label: "INFINO ED Credits",
          icon: <CreditCard size={16} />,
          path: "/infinioed-credits",
        },
      ],
    },
    {
      title: "Language",
      items: [{ label: "Language", icon: <Globe size={16} /> }],
    },
    {
      items: [
        { label: "Sign Out", icon: <LogOut size={16} />, onClick: logout },
      ],
    },
  ];

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
        className="w-60 p-1 shadow-lg rounded-md"
      >
        {menuSections.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <>
                <DropdownMenuLabel className="px-4 text-gray-400 text-xs uppercase">
                  {section.title}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}

            {section.items.map((item, itemIdx) => {
              // 🌐 Language selector
              if (item.label === "Language") {
                return (
                  <div
                    key={itemIdx}
                    className="flex items-center justify-between gap-2 px-4 py-2 rounded-md hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon} {item.label}
                    </div>
                    <select
                      defaultValue="en"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded px-2 py-1 text-sm"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                );
              }

              return (
                <DropdownMenuItem
                  key={itemIdx}
                  className={`flex items-center justify-between px-4 py-2 rounded-md hover:bg-white/10 ${
                    item.label === "Sign Out" ? "text-red-500 py-3" : ""
                  }`}
                  onClick={
                    item.onClick ??
                    (() => item.path && handleNavigate(item.path))
                  }
                >
                  <div className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </div>

                  {/* 🔴 Badge */}
                  {item.badgeCount && item.badgeCount > 0 && (
                    <span className="min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full text-xs font-semibold bg-red-500 text-white">
                      {item.badgeCount}
                    </span>
                  )}
                </DropdownMenuItem>
              );
            })}

            {idx < menuSections.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
