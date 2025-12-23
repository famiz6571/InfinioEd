import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatar: string;
  onEdit?: () => void;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  role,
  avatar,
  onEdit,
}) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
    <div className="flex items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{role}</p>
      </div>
    </div>
    <Button
      onClick={onEdit}
      className="self-start md:self-center bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600"
    >
      Edit Profile
    </Button>
  </div>
);

export default ProfileHeader;
