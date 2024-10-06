import { useGetClientDetailsQuery } from "@/services/coach-site/clients";
import { IDataSorting } from "./clients.interface";

export default function useClients() {
  const { data, isLoading, isFetching, isError } = useGetClientDetailsQuery({});

  const sortedData = [...(data?.clients || [])]
    ?.sort(
      (a: IDataSorting, b: IDataSorting) =>
        new Date(b?.updatedAt)?.getTime() - new Date(a?.updatedAt)?.getTime()
    )
    ?.slice(0, 4);

  return { data, isLoading, isFetching, isError, sortedData };
}
