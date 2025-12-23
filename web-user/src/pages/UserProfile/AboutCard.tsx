import { type FC, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AboutCardProps {
  bio: string;
  onSave: (bio: string) => void;
}

const AboutCard: FC<AboutCardProps> = ({ bio, onSave }) => {
  const [open, setOpen] = useState(false);

  const schema = z.object({
    bio: z.string().nonempty("Bio cannot be empty").max(500, "Bio too long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { bio },
  });

  const submitHandler = (data: { bio: string }) => {
    onSave(data.bio);
    setOpen(false);
  };

  const handleEdit = () => {
    reset({ bio });
    setOpen(true);
  };

  return (
    <>
      <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            About Me
          </CardTitle>
          <Button size="sm" variant="outline" onClick={handleEdit}>
            Edit
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{bio}</p>
        </CardContent>
      </Card>

      {/* Edit Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Edit Bio</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
            <Textarea {...register("bio")} className="w-full" rows={5} />
            {errors.bio && (
              <p className="text-red-500 text-sm">{errors.bio.message}</p>
            )}

            <DialogFooter className="flex justify-end gap-2 mt-2">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Save
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutCard;
