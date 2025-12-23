// src/pages/components/AddSubscriptionModal.tsx
import { type FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddSubscriptionModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: {
    name: string;
    plan: "Basic" | "Pro" | "Premium";
    price: string;
    status: "Active" | "Expired" | "Cancelled";
    renewalDate: string;
  }) => void;
}

const AddSubscriptionModal: FC<AddSubscriptionModalProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const [name, setName] = useState("");
  const [plan, setPlan] = useState<"Basic" | "Pro" | "Premium">("Basic");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState<"Active" | "Expired" | "Cancelled">(
    "Active"
  );
  const [renewalDate, setRenewalDate] = useState("");

  const handleAdd = () => {
    if (!name || !price || !renewalDate) return;
    onAdd({ name, plan, price, status, renewalDate });
    onClose();
    setName("");
    setPrice("");
    setRenewalDate("");
    setPlan("Basic");
    setStatus("Active");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Add Subscription</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Subscription Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select value={plan} onValueChange={(val) => setPlan(val as any)}>
            <SelectTrigger>
              <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Basic">Basic</SelectItem>
              <SelectItem value="Pro">Pro</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Select value={status} onValueChange={(val) => setStatus(val as any)}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Expired">Expired</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="date"
            placeholder="Renewal Date"
            value={renewalDate}
            onChange={(e) => setRenewalDate(e.target.value)}
          />
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button onClick={handleAdd}>Add</Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddSubscriptionModal;
