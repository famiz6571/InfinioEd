import { ReactNode, useMemo, useState, useEffect } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { FiInbox } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Spinner icon
import Pagination from "./Pagination";

export type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
  sortable?: boolean;
};

type DataTableProps<T extends { id: number | string }> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
  loading?: boolean; // loader prop
};

function DataTable<T extends { id: number | string }>({
  columns,
  data,
  className = "",
  loading = false,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const pageSize = 10;

  // Reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [search]);

  // SEARCH
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  // SORT
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const x = a[sortKey];
      const y = b[sortKey];
      if (x < y) return sortOrder === "asc" ? -1 : 1;
      if (x > y) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortOrder]);

  // PAGINATION
  const total = sortedData.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, total);
  const paginated = sortedData.slice(start, end);

  const toggleSort = (col: Column<T>) => {
    if (!col.sortable || typeof col.accessor !== "string") return;
    const key = col.accessor;

    if (sortKey === key) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }

    // Reset to first page when sorting
    setPage(1);
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900 ${className}`}
    >
      {/* Search */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-64 px-3 py-2 rounded-lg border border-gray-300 dark:border-white/20 
                     bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Table */}
      <div className="h-[400px] overflow-auto relative">
        {/* Loader overlay */}
        {loading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 dark:bg-gray-900/70">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500 dark:text-gray-300" />
          </div>
        )}

        <table className="min-w-full divide-y divide-gray-100 dark:divide-white/10">
          <thead className="sticky top-0 bg-white dark:bg-gray-900 z-10 shadow-sm">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  onClick={() => toggleSort(col)}
                  className={`px-5 py-3 text-left font-semibold text-gray-600 dark:text-gray-300 text-sm ${
                    col.sortable ? "cursor-pointer select-none" : ""
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {col.header}

                    {col.sortable &&
                      typeof col.accessor === "string" &&
                      (sortKey !== col.accessor ? (
                        <ArrowUpDown size={14} className="text-gray-400" />
                      ) : sortOrder === "asc" ? (
                        <ArrowUp
                          size={14}
                          className="text-gray-600 dark:text-gray-300"
                        />
                      ) : (
                        <ArrowDown
                          size={14}
                          className="text-gray-600 dark:text-gray-300"
                        />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-white/10">
            {/* Show rows only if not loading */}
            {!loading &&
              paginated.map((row, i) => (
                <tr
                  key={row.id}
                  className={`${
                    i % 2 === 0 ? "bg-primary/10 dark:bg-primary/10" : ""
                  }`}
                >
                  {columns.map((col, idx) => {
                    const value =
                      typeof col.accessor === "function"
                        ? col.accessor(row)
                        : (row[col.accessor] as unknown as ReactNode);

                    return (
                      <td
                        key={idx}
                        className={`px-5 py-4 text-gray-700 dark:text-gray-300 text-sm ${
                          col.className || ""
                        }`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}

            {/* No data found message (only if not loading) */}
            {!loading && paginated.length === 0 && (
              <tr>
                <td colSpan={columns.length}>
                  <div className="h-[300px] flex flex-col items-center justify-center gap-3 text-gray-500 dark:text-gray-400">
                    <FiInbox size={40} />
                    <span>No data found</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (hide when loading) */}
      {!loading && total > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          start={start}
          end={end}
          total={total}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default DataTable;
