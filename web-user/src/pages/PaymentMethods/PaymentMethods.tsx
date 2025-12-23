import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddPaymentMethod, { type PaymentMethodType } from "./AddPaymentMethod";
import BankTransferCard from "./BankTransferCard";
import PayPalCard from "./PayPalCard";
import CreditCard from "./CreditCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Payment {
  id: number;
  type: PaymentMethodType;
  cardNumber?: string;
  expiry?: string;
  cardHolder?: string;
  color?: string;
  email?: string;
  bankName?: string;
  accountNumber?: string;
}

export default function PaymentMethods() {
  const [methods, setMethods] = useState<Payment[]>([
    {
      id: 1,
      type: "Credit Card",
      cardNumber: "1234123412341234",
      expiry: "12/25",
      cardHolder: "John Doe",
      color: "#4f46e5",
    },
    {
      id: 2,
      type: "Credit Card",
      cardNumber: "5678567856785678",
      expiry: "08/24",
      cardHolder: "Jane Smith",
      color: "#f97316",
    },
    { id: 3, type: "PayPal", email: "jane@example.com" },
    {
      id: 4,
      type: "Bank Transfer",
      bankName: "HSBC",
      accountNumber: "1234567890",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAdd = (data: Omit<Payment, "id">) => {
    const newMethod: Payment = {
      id: Date.now(),
      ...data,
    };
    setMethods((prev) => [...prev, newMethod]);
  };

  const getCount = (type: PaymentMethodType) =>
    methods.filter((m) => m.type === type).length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Payment Methods
        </h1>
        <Button
          variant="default"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" /> Add Method
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="credit-card" className="space-y-4">
        <TabsList className="bg-gray-100 dark:bg-gray-800 rounded-full p-1">
          <TabsTrigger
            value="credit-card"
            className="rounded-full px-4 py-2 text-sm font-medium"
          >
            Credit Cards ({getCount("Credit Card")})
          </TabsTrigger>
          <TabsTrigger
            value="paypal"
            className="rounded-full px-4 py-2 text-sm font-medium"
          >
            PayPal ({getCount("PayPal")})
          </TabsTrigger>
          <TabsTrigger
            value="bank-transfer"
            className="rounded-full px-4 py-2 text-sm font-medium"
          >
            Bank Transfer ({getCount("Bank Transfer")})
          </TabsTrigger>
        </TabsList>

        {/* Credit Card Section */}
        <TabsContent value="credit-card">
          {getCount("Credit Card") === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No credit cards added.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods
                .filter((m) => m.type === "Credit Card")
                .map((m) => (
                  <div
                    key={m.id}
                    className="transition-transform hover:scale-105"
                  >
                    <CreditCard
                      type={m.type}
                      last4={m.cardNumber?.slice(-4)}
                      expiry={m.expiry}
                      cardHolder={m.cardHolder}
                      color={m.color}
                      onDelete={() => handleDelete(m.id)}
                    />
                  </div>
                ))}
            </div>
          )}
        </TabsContent>

        {/* PayPal Section */}
        <TabsContent value="paypal">
          {getCount("PayPal") === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No PayPal accounts added.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods
                .filter((m) => m.type === "PayPal")
                .map((m) => (
                  <div
                    key={m.id}
                    className="transition-transform hover:scale-105"
                  >
                    <PayPalCard
                      email={m.email}
                      onDelete={() => handleDelete(m.id)}
                    />
                  </div>
                ))}
            </div>
          )}
        </TabsContent>

        {/* Bank Transfer Section */}
        <TabsContent value="bank-transfer">
          {getCount("Bank Transfer") === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No bank accounts added.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods
                .filter((m) => m.type === "Bank Transfer")
                .map((m) => (
                  <div
                    key={m.id}
                    className="transition-transform hover:scale-105"
                  >
                    <BankTransferCard
                      bankName={m.bankName}
                      accountNumber={m.accountNumber}
                      onDelete={() => handleDelete(m.id)}
                    />
                  </div>
                ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Add Payment Method Modal */}
      <AddPaymentMethod
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}
