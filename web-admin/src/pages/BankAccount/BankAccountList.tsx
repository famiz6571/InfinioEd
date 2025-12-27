import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DataTable, { Column } from "../../components/tables/DataTable";
import Button from "../../components/ui/button/Button";
import httpService from "../../services/httpService";
import { encryptParam } from "../../utils/crypto";
import { Icon } from "@iconify/react";
export interface BankAccount {
  bankName: string;
  accountNumber: string;
  isPrimary: boolean;
  isActive: boolean;
  student: { fullName: string };
}
const BankAccountList = () => {
  const [data, setData] = useState<BankAccount[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const columns: Column<any>[] = [
    { header: "Student", accessor: (row) => row.student?.fullName || "-" },
    { header: "Bank", accessor: "bankName" },
    { header: "Account No", accessor: "accountNumber" },
    {
      header: "Primary",
      accessor: (row) =>
        row.isPrimary ? (
          <span className="px-2 py-1 text-white bg-blue-500 rounded-full text-theme-xs">
            Yes
          </span>
        ) : (
          <span className="px-2 py-1 text-white bg-gray-400 rounded-full text-theme-xs">
            No
          </span>
        ),
    },
    {
      header: "Active",
      accessor: (row) =>
        row.isActive ? (
          <span className="px-2 py-1 text-white bg-green-500 rounded-full text-theme-xs">
            Yes
          </span>
        ) : (
          <span className="px-2 py-1 text-white bg-gray-400 rounded-full text-theme-xs">
            No
          </span>
        ),
    },
    {
      header: "Action",
      accessor: (row) => (
        <button
          onClick={() =>
            navigate(`/bank-accounts/edit/${encryptParam(row.bankAccountId)}`)
          }
          className="p-2 bg-primary text-white rounded-full"
        >
          <Icon icon="mdi:pencil" width={16} height={16} />
        </button>
      ),
    },
  ];
  const fetchBankAccounts = async () => {
    setLoading(true);
    try {
      const res = await httpService.get<BankAccount[]>("bank-accounts");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching bank accounts:", error);
      // Optionally show a toast/error message here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBankAccounts();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Bank Accounts" />
      <div className="flex justify-end items-center p-4">
        <Button onClick={() => navigate("/bank-accounts/create")}>
          Add Bank Account
        </Button>
      </div>
      <DataTable columns={columns} data={data} loading={loading} />
    </>
  );
};
export default BankAccountList;
