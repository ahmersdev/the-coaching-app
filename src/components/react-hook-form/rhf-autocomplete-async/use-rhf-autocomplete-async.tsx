import { useState, useEffect, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "@mui/material";
import { IUseRhfAutocompleteAsyncProps } from "./rhf-autocomplete-async.interface";

export default function useRhfAutocompleteAsync({
  apiQuery,
  queryKey,
  externalParams,
  debounceTime,
}: IUseRhfAutocompleteAsyncProps) {
  const theme: any = useTheme();

  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [trigger, { data, isLoading, isFetching }]: any = apiQuery;
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const triggerWithDebounce = useCallback(
    (newInputValue: string) => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      const timeout = setTimeout(() => {
        trigger({ params: { [queryKey]: newInputValue, ...externalParams } });
      }, debounceTime);
      setDebounceTimeout(timeout);
    },
    [debounceTimeout, queryKey, externalParams, debounceTime, trigger]
  );

  const onChanged = useCallback((e: any, newValue: any, onChange: any) => {
    onChange(newValue);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  return {
    theme,
    control,
    data,
    isLoading,
    isFetching,
    setOpen,
    open,
    trigger,
    onChanged,
    triggerWithDebounce,
  };
}
