import { type FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface AboutCardProps {
  bio: string;
}

const AboutCard: FC<AboutCardProps> = ({ bio }) => (
  <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
        About Me
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 dark:text-gray-300">{bio}</p>
    </CardContent>
  </Card>
);

export default AboutCard;
