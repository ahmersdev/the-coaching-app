import { useState } from "react";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  useDeleteAdminFaqMutation,
  useGetAdminFaqsQuery,
} from "@/services/admin/faqs";

export default function useFaqs() {
  const [addFaq, setAddFaq] = useState(false);
  const [deleteFaq, setDeleteFaq] = useState<any>(null);

  const { data, isLoading, isFetching, isError } = useGetAdminFaqsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const transformedData = Array.isArray(data)
    ? data.map(({ question, answer, ...rest }: any) => ({
        summary: question,
        details: answer,
        ...rest,
      }))
    : [];

  const [deleteAdminFaqTrigger, deleteAdminFaqStatus] =
    useDeleteAdminFaqMutation();

  const handleDelete = async (faq: any) => {
    const updatedData = {
      faq_id: faq.faqs_id,
    };
    try {
      await deleteAdminFaqTrigger(updatedData).unwrap();
      successSnackbar("FAQ Deleted Successfully!");
      setDeleteFaq(false);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    transformedData,
    isLoading,
    isFetching,
    isError,
    addFaq,
    setAddFaq,
    deleteFaq,
    setDeleteFaq,
    handleDelete,
    deleteAdminFaqStatus,
  };
}
