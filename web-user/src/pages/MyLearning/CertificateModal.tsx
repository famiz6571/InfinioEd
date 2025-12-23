// src/pages/MyLearning/CertificateModal.tsx
import { type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CertificateModalProps {
  open: boolean;
  onClose: () => void;
  studentName: string;
  courseName: string;
  date: string;
}

const CertificateModal: FC<CertificateModalProps> = ({
  open,
  onClose,
  studentName,
  courseName,
  date,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle>Certificate</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-2xl border-4 border-indigo-600 shadow-2xl relative">
            {/* Decorative corner lines */}
            <div className="absolute top-4 left-4 w-16 h-1 bg-indigo-600"></div>
            <div className="absolute bottom-4 right-4 w-16 h-1 bg-indigo-600"></div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
              Certificate of Completion
            </h1>
            <p className="text-lg md:text-xl mb-2 text-gray-700">
              This certifies that
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
              {studentName}
            </h2>
            <p className="text-lg md:text-xl mb-2 text-gray-700">
              has successfully completed
            </p>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-800">
              {courseName}
            </h3>
            <p className="text-base text-gray-600">Date: {date}</p>
            <p className="text-base font-semibold mt-6 text-gray-900">
              INFINOED
            </p>
          </div>

          <DialogFooter className="mt-6 flex justify-center">
            <Button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
            >
              Close
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
