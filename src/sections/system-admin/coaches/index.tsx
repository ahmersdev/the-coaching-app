"use client";

import TanstackTable from "@/components/table";
import { coachesColumns } from "./coaches.data";
import { useState } from "react";
import { PAGINATION } from "@/config";
import { useGetAdminCoachesQuery } from "@/services/admin/coaches";

const Coaches = () => {
  const [page, setPage] = useState(PAGINATION.CURRENT_PAGE);
  const [pageLimit, setPageLimit] = useState(PAGINATION.PAGE_LIMIT);

  const params = {
    page: page,
    limit: pageLimit,
  };

  const { data, isLoading, isFetching, isError } = useGetAdminCoachesQuery(
    params,
    { refetchOnMountOrArgChange: true }
  );

  return (
    <TanstackTable
      data={data?.coaches}
      columns={coachesColumns}
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

export default Coaches;
