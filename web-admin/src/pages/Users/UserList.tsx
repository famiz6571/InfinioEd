import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import { User } from "../../types/user";
import Button from "../../components/ui/button/Button";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { encryptParam } from "../../utils/crypto";
import DataTable, { Column } from "../../components/tables/DataTable";
import { Icon } from "@iconify/react";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columns: Column<User>[] = [
    {
      header: "User",
      accessor: "name",
      sortable: true,
    },
    { header: "Email", accessor: "email", sortable: true },
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
          onClick={() => navigate(`/users/edit/${encryptParam(row.userId)}`)}
          className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white dark:text-black flex items-center justify-center"
          title="Edit"
        >
          <Icon icon="mdi:pencil" width={16} height={16} />
        </button>
      ),
    },
  ];

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await httpService.get<User[]>("users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Optionally show a toast/error message here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Users" />
      <div className="flex justify-end items-center p-4">
        <Button onClick={() => navigate("/users/create")}>Create User</Button>
      </div>
      <DataTable columns={columns} data={users} loading={loading} />
    </>
  );
};

export default UserList;
