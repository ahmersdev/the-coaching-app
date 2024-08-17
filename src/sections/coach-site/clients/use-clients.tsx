import { useGetClientDetailsQuery } from "@/services/coach-site/clients";
import { IDataSorting } from "./cleints.interface";

export default function useClients() {
  const { data, isLoading, isFetching, isError } = useGetClientDetailsQuery({});

  const sortedData = [...(data?.clients || [])]?.sort(
    (a: IDataSorting, b: IDataSorting) =>
      new Date(b?.updatedAt)?.getTime() - new Date(a?.updatedAt)?.getTime()
  );

  return { data, isLoading, isFetching, isError, sortedData };
}
