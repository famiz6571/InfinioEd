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

export type PaymentMethodType = "Credit Card" | "PayPal" | "Bank Transfer";

interface AddPaymentMethodProps {
  open: boolean;
  onClose: () => void;
  onAdd: (data: {
    type: PaymentMethodType;
    cardNumber?: string;
    expiry?: string;
    cardHolder?: string;
    email?: string;
    bankName?: string;
    accountNumber?: string;
    color?: string;
  }) => void;
}

const AddPaymentMethod: FC<AddPaymentMethodProps> = ({
  open,
  onClose,
  onAdd,
}) => {
  const [type, setType] = useState<PaymentMethodType>("Credit Card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [color, setColor] = useState("#4f46e5");

  const handleAdd = () => {
    const data: any = { type, color };

    if (type === "Credit Card") {
      if (!cardNumber || !expiry || !cardHolder) return;
      Object.assign(data, { cardNumber, expiry, cardHolder });
    } else if (type === "PayPal") {
      if (!email) return;
      Object.assign(data, { email });
    } else if (type === "Bank Transfer") {
      if (!bankName || !accountNumber) return;
      Object.assign(data, { bankName, accountNumber });
    }

    onAdd(data);
    onClose();
    // Reset
    setCardNumber("");
    setExpiry("");
    setCardHolder("");
    setEmail("");
    setBankName("");
    setAccountNumber("");
    setColor("#4f46e5");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Add Payment Method</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <Select
            value={type}
            onValueChange={(val) => setType(val as PaymentMethodType)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Credit Card">Credit Card</SelectItem>
              <SelectItem value="PayPal">PayPal</SelectItem>
              <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
            </SelectContent>
          </Select>

          {type === "Credit Card" && (
            <>
              <Input
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <Input
                placeholder="Expiry (MM/YY)"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <Input
                placeholder="Card Holder Name"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
              <Input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </>
          )}

          {type === "PayPal" && (
            <Input
              placeholder="PayPal Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          {type === "Bank Transfer" && (
            <>
              <Input
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <Input
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </>
          )}
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

export default AddPaymentMethod;
