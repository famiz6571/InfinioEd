import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import DataTable, { Column } from "../../components/tables/DataTable";
import Button from "../../components/ui/button/Button";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { encryptParam } from "../../utils/crypto";
import { Icon } from "@iconify/react";
import DynamicIcon from "../../components/form/DynamicIcon";

export interface Menu {
  menuId: string;
  id: string; // map menuId for DataTable
  name: string;
  path?: string;
  icon: string;
  order?: number;
  isActive: boolean;
  parentId?: string;
  parentName?: string;
}

const MenuList = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columns: Column<Menu>[] = [
    {
      header: "Name",
      accessor: "name",
      sortable: true,
    },
    {
      header: "Path",
      accessor: "path",
      sortable: true,
    },
    {
      header: "Parent Menu",
      accessor: (row) => row.parentName || "-",
    },
    {
      header: "Icon",
      accessor: (row) => <DynamicIcon iconName={row.icon} size={24} />,
    },
    {
      header: "Order",
      accessor: "order",
      sortable: true,
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
          onClick={() => navigate(`/menus/edit/${encryptParam(row.menuId)}`)}
          className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white flex items-center justify-center"
          title="Edit"
        >
          <Icon icon="mdi:pencil" width={16} height={16} />
        </button>
      ),
    },
  ];

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const res = await httpService.get<Menu[]>("menus");
      const dataWithParent = res.data.map((m) => ({
        ...m,
        id: m.menuId,
        parentName: res.data.find((p) => p.menuId === m.parentId)?.name || "",
      }));
      setMenus(dataWithParent);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Menus" />
      <div className="flex justify-end items-center p-4">
        <Button onClick={() => navigate("/menus/create")}>Create Menu</Button>
      </div>
      <DataTable columns={columns} data={menus} loading={loading} />
    </>
  );
};

export default MenuList;
