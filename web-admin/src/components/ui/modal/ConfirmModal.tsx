import Button from "../button/Button";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./index";

interface ConfirmModalProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message: string;
  isBlur?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  onConfirm,
  onCancel,
  title,
  message,
  isBlur = true,
}) => {
  return (
    <Modal
      isOpen={show}
      isBlur={isBlur}
      onClose={onCancel}
      // Center modal content
      className="flex items-center justify-center"
    >
      <ModalHeader className="justify-center text-center text-gray-500 dark:text-white">
        {title}
      </ModalHeader>
      <ModalBody>
        <p className="text-center text-base leading-relaxed text-gray-500 dark:text-white">
          {message}
        </p>
      </ModalBody>
      <ModalFooter className="flex justify-center gap-2">
        <Button type="button" variant="primary" onClick={onConfirm}>
          Yes, Confirm
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
