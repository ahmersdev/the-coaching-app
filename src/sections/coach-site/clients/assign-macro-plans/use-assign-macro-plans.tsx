import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  macroDefaultValues,
  macroValidationSchema,
} from "./assign-macro-plans.data";
import { usePostAssignMacroMutation } from "@/services/coach-site/clients";
import { useRouter, useSearchParams } from "next/navigation";
import { COACH_SITE } from "@/constants/routes";

export default function useAssignMacroPlans() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get("clientId");

  const methods: any = useForm({
    resolver: yupResolver(macroValidationSchema),
    defaultValues: macroDefaultValues,
  });

  const { handleSubmit, control, reset } = methods;

  const {
    fields: fieldsMacro,
    append: appendMacro,
    remove: removeMacro,
  } = useFieldArray({
    control,
    name: "macros",
  });

  const handleAddMacro = () => {
    appendMacro(macroDefaultValues.macros);
  };

  const handleRemoveMacro = (macroIndex: any) => {
    removeMacro(macroIndex);
  };

  const [postMacroTrigger, postMacroStatus] = usePostAssignMacroMutation();

  const onSubmit = async (data: any) => {
    const transformedData = data.macros.map((macro: any) => ({
      title: macro.title,
      protein: Number(macro.protein),
      carbs: Number(macro.carbs),
      fats: Number(macro.fats),
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

  return {
    methods,
    handleSubmit,
    onSubmit,
    fieldsMacro,
    handleAddMacro,
    handleRemoveMacro,
    postMacroStatus,
  };
}
