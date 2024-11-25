import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useEffect } from "react";
import * as Yup from "yup";
import { useUpdateAdminComplaintsReplyMutation } from "@/services/admin/complaints";

export default function useReply({ reply, setReply }: any) {
  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        reply: Yup?.string()?.trim()?.required("Reply is Required"),
      })
    ),
    defaultValues: {
      reply: reply?.data?.reply ?? "",
    },
  });

  const { handleSubmit, reset } = methods;
  useEffect(() => {
    reset({
      reply: reply?.data?.reply ?? "",
    });
  }, [reply?.data, reset]);

  const onReplyCloseHandler = () => {
    setReply({ open: false, data: null });
  };

  const [updateAdminComplaintsReplyTrigger, updateAdminComplaintsReplyStatus] =
    useUpdateAdminComplaintsReplyMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      complaint_id: reply?.data?.complaint_id,
      reply: data.reply,
    };
    try {
      await updateAdminComplaintsReplyTrigger(updatedData).unwrap();
      successSnackbar("Reply Sent Successfully!");
      onReplyCloseHandler();
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    onReplyCloseHandler,
    methods,
    handleSubmit,
    onSubmit,
    updateAdminComplaintsReplyStatus,
  };
}
