import { useNavigate } from "react-router";
import Button from "../ui/button/Button";

interface FormActionsProps {
  submitLabel?: string;
  cancelPath?: string;
  disabled?: boolean;
  cancelLabel?: string;
  onCancel?: () => void;
  disableCancel?: boolean;
  hideCancel?: boolean;
}

const FormActions = ({
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  cancelPath = "/",
  disabled = false,
  disableCancel = false,
  hideCancel = true,
  onCancel,
}: FormActionsProps) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (onCancel) {
      onCancel(); // run the custom cancel logic
    } else {
      void navigate(cancelPath); // fallback navigation
    }
  };

  return (
    <div className="col-span-9 flex items-center gap-[1rem] p-1 mt-5">
      <Button type="submit" variant="primary" disabled={disabled}>
        <span className="text-[16px]">{submitLabel}</span>
      </Button>
      {hideCancel && (
        <Button
          type="button"
          variant="outline"
          disabled={disableCancel}
          onClick={handleCancel}
        >
          <span className="text-[16px]">{cancelLabel}</span>
        </Button>
      )}
    </div>
  );
};

export default FormActions;
