import { useFieldArray, useForm } from "react-hook-form";
import { macroDefaultValues } from "@/sections/coach-site/clients/assign-macro.data";
import { useEffect } from "react";

export default function useMacro(macroPlans: any) {
  const methods: any = useForm({
    defaultValues: macroDefaultValues,
  });

  const { control, reset } = methods;

  const { fields: fieldsMacro } = useFieldArray({
    control,
    name: "macros",
  });

  useEffect(() => {
    const originalFormData = macroPlans.map((macro: any) => ({
      macro_plan_id: macro.macro_plan_id,
      title: macro.title,
      protein: macro.protein,
      carbs: macro.carbs,
      fats: macro.fats,
      type: macro.type,
      note: macro.note,
    }));

    reset({ macros: originalFormData });
  }, [macroPlans, reset]);

  return { methods, fieldsMacro };
}
