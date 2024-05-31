import { useTheme } from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function useRhfAutocomplete({ multiple }: any) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  const theme: any = useTheme();

  const onChanged = (e: any, newValue: any, onChange: any) => {
    if (multiple) {
      onChange(newValue?.map((item: any) => item));
    } else {
      onChange(newValue);
    }
  };

  return { control, setOpen, open, theme, onChanged };
}
