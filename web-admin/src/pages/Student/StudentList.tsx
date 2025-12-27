import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DataTable, { Column } from "../../components/tables/DataTable";
import Button from "../../components/ui/button/Button";
import httpService from "../../services/httpService";
import { encryptParam } from "../../utils/crypto";
import { Icon } from "@iconify/react";

export interface Student {
  admissionNo: string;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  department?: string;
  batch?: string;
  semester?: number;
  admissionDate: string;
  isActive: boolean;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const columns: Column<any>[] = [
    { header: "Name", accessor: "fullName" },
    { header: "Admission No", accessor: "admissionNo" },
    { header: "Course", accessor: "course" },
    {
      header: "Admission Status",
      accessor: (row) => {
        let bgColor = "bg-gray-200 text-gray-800"; // default

        switch (row.admissionStatus) {
          case "Applied":
            bgColor = "bg-yellow-100 text-yellow-800";
            break;
          case "Enrolled":
            bgColor = "bg-green-100 text-green-800";
            break;
          case "Suspended":
            bgColor = "bg-red-100 text-red-800";
            break;
          case "Graduated":
            bgColor = "bg-blue-100 text-blue-800";
            break;
        }

        return (
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium ${bgColor}`}
          >
            {row.admissionStatus || "-"}
          </span>
        );
      },
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
            navigate(`/students/edit/${encryptParam(row.studentId)}`)
          }
          className="p-2 bg-primary text-white rounded-full"
        >
          <Icon icon="mdi:pencil" width={16} height={16} />
        </button>
      ),
    },
  ];
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await httpService.get<Student[]>("students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      // Optionally show a toast/error message here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Students" />
      <div className="flex justify-end items-center p-4">
        <Button onClick={() => navigate("/students/create")}>
          Create Student
        </Button>
      </div>

      <DataTable columns={columns} data={students} loading={loading} />
    </>
  );
};

export default StudentList;
