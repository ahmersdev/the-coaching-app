import { useGetClientImagesQuery } from "@/services/coach-site/clients-images";
import { useTheme } from "@mui/material";
import { IDataSorting } from "./clients-images.interface";

export default function useClientsImages() {
  const theme: any = useTheme();
  const { data, isLoading, isFetching, isError } = useGetClientImagesQuery({});

  const checkInDetails = data?.check_in_details;

  const sortedData = [...(checkInDetails || [])]
    ?.sort(
      (a: IDataSorting, b: IDataSorting) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 4);

  return { theme, isLoading, isFetching, isError, sortedData, checkInDetails };
}
