import { useGetClientImagesQuery } from "@/services/coach-site/clients-images";
import { useTheme } from "@mui/material";
import { IDataSorting } from "./clients-images.interface";
import { useState } from "react";

export default function useClientsImages() {
  const theme: any = useTheme();

  const [showDetails, setShowDetails] = useState({
    open: false,
    details: null,
  });

  const { data, isLoading, isFetching, isError } = useGetClientImagesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const sortedData = [...(data?.check_in_details || [])]
    ?.sort(
      (a: IDataSorting, b: IDataSorting) =>
        new Date(b?.updatedAt)?.getTime() - new Date(a?.updatedAt)?.getTime()
    )
    ?.slice(0, 4);

  return {
    theme,
    isLoading,
    isFetching,
    isError,
    sortedData,
    data,
    showDetails,
    setShowDetails,
  };
}
