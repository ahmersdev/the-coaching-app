"use client";

import TanstackTable from "@/components/table";
import { clientsColumns } from "./clients.data";
import { useState } from "react";
import { PAGINATION } from "@/config";
import { useGetAdminClientDetailsQuery } from "@/services/admin/clients";

const Clients = () => {
  const [page, setPage] = useState(PAGINATION.CURRENT_PAGE);
  const [pageLimit, setPageLimit] = useState(PAGINATION.PAGE_LIMIT);

  const params = {
    page: page,
    limit: pageLimit,
  };

  const { data, isLoading, isFetching, isError } =
    useGetAdminClientDetailsQuery(params, { refetchOnMountOrArgChange: true });

  return (
    <TanstackTable
      data={data}
      columns={clientsColumns}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isPagination
      setPageLimit={setPageLimit}
      setPage={setPage}
      currentPage={data?.meta?.page}
      count={data?.meta?.pages}
      pageLimit={data?.meta?.limit}
      totalRecords={data?.meta?.total}
      onPageChange={(page: number) => setPage(page)}
    />
  );
};

export default Clients;
