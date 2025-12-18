import { useMemo } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type PaginationProps = {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  setPage: (page: number) => void;
};

const Pagination = ({
  page,
  totalPages,
  start,
  end,
  total,
  setPage,
}: PaginationProps) => {
  const pageList = useMemo(() => {
    const pages: (number | "...")[] = [];
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
        pages.push(p);
      }
    }

    const finalList: (number | "...")[] = [];
    for (let i = 0; i < pages.length; i++) {
      const prev = pages[i - 1];
      const curr = pages[i];

      if (
        typeof prev === "number" &&
        typeof curr === "number" &&
        curr - prev > 1
      ) {
        finalList.push("...");
      }
      finalList.push(curr);
    }

    return finalList;
  }, [page, totalPages]);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 border-t border-gray-100 dark:border-white/10">
      {/* LEFT — records */}
      <span className="text-gray-500 dark:text-gray-400 text-sm">
        Showing {start + 1}–{end} of {total}
      </span>

      {/* RIGHT — pagination */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-white/20 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-40"
        >
          <ChevronsLeft size={16} />
        </button>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-white/20 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-40"
        >
          <ChevronLeft size={16} />
        </button>

        {pageList.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2 text-gray-400">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p as number)}
              className={`px-3 py-2 rounded-lg border text-sm ${
                p === page
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 dark:border-white/20 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-white/20 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-40"
        >
          <ChevronRight size={16} />
        </button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-white/20 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-40"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
