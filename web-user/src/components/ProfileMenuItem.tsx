import type { FC, ReactNode } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface ProfileMenuItemProps {
  icon: ReactNode;
  label: string;
  description?: string;
  badgeCount?: number;
  danger?: boolean;
  onClick?: () => void;
}

const ProfileMenuItem: FC<ProfileMenuItemProps> = ({
  icon,
  label,
  description,
  badgeCount,
  danger,
  onClick,
}) => {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 rounded-md hover:bg-white/10 ${
        danger ? "text-red-500 py-3" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}

        <div className="flex flex-col">
          <span className="text-sm font-normal leading-tight">{label}</span>

          {description && (
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[160px]">
              {description}
            </span>
          )}
        </div>
      </div>

      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full text-xs font-semibold bg-red-500 text-white">
          {badgeCount}
        </span>
      )}
    </DropdownMenuItem>
  );
};

export default ProfileMenuItem;
