import React from 'react';
import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

const useTanstackTable = (data: any, columns: any, showSerialNo: boolean) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  let columnsData = columns;
  if (showSerialNo)
    columnsData = [
      {
        accessorFn: (row: any) => row,
        id: 'srNo',
        cell: (info: any) => Number(info?.row?.id) + 1,
        header: 'Sr. No',
        isSortable: true,
      },
      ...columns,
    ];

  const table = useReactTable({
    data: data ?? [],
    columns: columnsData,
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
