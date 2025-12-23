import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatar: string;
  social?: SocialLinks;
  onEdit?: () => void;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  role,
  avatar,
  social,
  onEdit,
}) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
    <div className="flex items-center gap-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{role}</p>
        {social && (
          <div className="flex gap-3 mt-1">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
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
