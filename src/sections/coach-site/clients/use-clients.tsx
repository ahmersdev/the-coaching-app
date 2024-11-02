import { useGetClientDetailsQuery } from "@/services/coach-site/clients";
import { IDataSorting } from "./clients.interface";
import { useState } from "react";
import { PAGINATION } from "@/config";

export default function useClients() {
  const [page, setPage] = useState(PAGINATION.CURRENT_PAGE);
  const [pageLimit, setPageLimit] = useState(PAGINATION.PAGE_LIMIT);

  const params = {
    page: page,
    limit: pageLimit,
  };

  const { data, isLoading, isFetching, isError } = useGetClientDetailsQuery(
    params,
    { refetchOnMountOrArgChange: true }
  );

  const sortedData = [...(data?.clients || [])]
    ?.sort(
      (a: IDataSorting, b: IDataSorting) =>
        new Date(b?.updatedAt)?.getTime() - new Date(a?.updatedAt)?.getTime()
    )
    ?.slice(0, 4);

  return {
    data,
    isLoading,
    isFetching,
    isError,
    sortedData,
    setPageLimit,
    setPage,
  };
}
