import React from "react";
import { allIcons } from "../../utils/allIcons";

interface DynamicIconProps {
  iconName: string | null | undefined;
  size?: number;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
  size = 24,
  className,
}) => {
  if (!iconName) return null;

  const IconComponent = allIcons[iconName as keyof typeof allIcons];
  if (!IconComponent) return null;

  return <IconComponent size={size} className={className} />;
};

export default DynamicIcon;
