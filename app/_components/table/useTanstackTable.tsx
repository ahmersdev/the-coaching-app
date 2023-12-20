import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const useTanstackTable = (data: any, columns: any) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: data ?? [],
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useTanstackTable;
