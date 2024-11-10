import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { macroValidationSchema } from "./assign-macro-plans.data";
import {
  useGetAssignMacroQuery,
  usePostAssignMacroMutation,
} from "@/services/coach-site/clients";
import { useRouter, useSearchParams } from "next/navigation";
import { COACH_SITE } from "@/constants/routes";
import { useEffect } from "react";
import { macroDefaultValues } from "@/sections/coach-site/clients/assign-macro.data";

export default function useAssignMacroPlans() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get("clientId");

  const methods: any = useForm({
    resolver: yupResolver(macroValidationSchema),
    defaultValues: macroDefaultValues,
  });

  const { handleSubmit, control, reset } = methods;

  const { fields: fieldsMacro } = useFieldArray({
    control,
    name: "macros",
  });

  const [postMacroTrigger, postMacroStatus] = usePostAssignMacroMutation();

  const onSubmit = async (data: any) => {
    const transformedData = data.macros.map((macro: any) => ({
      title: macro.title,
      protein: macro.protein ?? "",
      carbs: macro.carbs ?? "",
      fats: macro.fats ?? "",
      type: macro.type,
      note: macro.note,
    }));

    const updatedData = {
      details: JSON.stringify(transformedData),
      client_id: clientId,
    };

    try {
      await postMacroTrigger(updatedData).unwrap();
      successSnackbar("Macro Assigned Successfully!");
      router.push(COACH_SITE.CLIENTS);
      reset();
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };

  const { data, isLoading, isFetching, isError } = useGetAssignMacroQuery(
    { client_id: clientId },
    { refetchOnMountOrArgChange: true, skip: !clientId }
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const originalFormData = data.map((macro: any) => ({
        macro_plan_id: macro.macro_plan_id,
        title: macro.title,
        protein: macro.protein,
        carbs: macro.carbs,
        fats: macro.fats,
        type: macro.type,
        note: macro.note,
      }));

      reset({ macros: originalFormData });
    }
  }, [data, reset]);

  return {
    methods,
    handleSubmit,
    onSubmit,
    fieldsMacro,
    postMacroStatus,
    isLoading,
    isFetching,
    isError,
  };
}
