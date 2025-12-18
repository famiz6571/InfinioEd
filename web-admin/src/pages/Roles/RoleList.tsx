import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import DataTable, { Column } from "../../components/tables/DataTable";
import Button from "../../components/ui/button/Button";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { encryptParam } from "../../utils/crypto";
import { Icon } from "@iconify/react";

export interface Role {
  roleId: string;
  id: string; // map roleId for DataTable
  roleName: string;
  isActive: boolean;
  menus: { name: string }[];
}

const RoleList = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columns: Column<Role>[] = [
    {
      header: "Role Name",
      accessor: "roleName",
      sortable: true,
    },
    {
      header: "Mapped Menus",
      accessor: (row) =>
        row.menus.length > 0 ? row.menus.map((m) => m.name).join(", ") : "-",
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
          onClick={() => navigate(`/roles/edit/${encryptParam(row.roleId)}`)}
          className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white flex items-center justify-center"
          title="Edit"
        >
          <Icon icon="mdi:pencil" width={16} height={16} />
        </button>
      ),
    },
  ];

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await httpService.get<Role[]>("roles");
      const dataWithId = res.data.map((r) => ({
        ...r,
        id: r.roleId,
      }));
      setRoles(dataWithId);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Roles" />
      <div className="flex justify-end items-center p-4">
        <Button onClick={() => navigate("/roles/create")}>Create Role</Button>
      </div>
      <DataTable columns={columns} data={roles} loading={loading} />
    </>
  );
};

export default RoleList;
