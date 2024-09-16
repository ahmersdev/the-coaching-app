import { useState, Fragment, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { FormLabel, Paper, Typography, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function RHFAutocompleteAsync({
  name,
  apiQuery,
  queryKey = "search",
  debounceTime = 500,
  getOptionLabel = (option: any) => option?.name,
  variant = "outlined",
  placeholder,
  noOptionsCase = "Nothing in the List",
  externalParams = {},
  isOptionEqualToValue = (option: any, newValue: any) =>
    option?._id === newValue?._id,
  renderOption,
  required,
  ...other
}: any): JSX.Element {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const [trigger, { data, isLoading, isFetching }]: any = apiQuery;
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const triggerWithDebounce = (newInputValue: string) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      trigger({ params: { [queryKey]: newInputValue, ...externalParams } });
    }, debounceTime);
    setDebounceTimeout(timeout);
  };

  const onChanged = (e: any, newValue: any, onChange: any) => {
    onChange(newValue);
  };

  const theme = useTheme();

  useEffect(() => {
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  return (
    <Controller
      name={name}
      control={control}
      render={(form) => {
        return (
          <Autocomplete
            {...form?.field}
            id={name}
            open={open}
            autoComplete
            includeInputInList
            noOptionsText={noOptionsCase}
            options={isLoading || isFetching ? [] : data ?? []}
            {...other}
            onOpen={() => {
              setOpen(true);
              trigger({ params: { ...externalParams } });
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            loading={isLoading || isFetching}
            onChange={(e: React.SyntheticEvent, newValue: any) => {
              onChanged(e, newValue, form?.field?.onChange);
              setOpen(false);
            }}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: theme?.palette?.common?.white,
                  border: `1px solid ${theme?.palette?.custom?.off_white_three}`,
                  borderRadius: 1,
                  boxShadow: 1,
                  color: "grey.600",
                }}
              >
                {props?.children}
              </Paper>
            )}
            onInputChange={(event, newInputValue) => {
              triggerWithDebounce(newInputValue);
            }}
            renderOption={(props, option: any) => {
              return (
                <li {...props} key={option?._id ?? option?.id}>
                  {renderOption ? renderOption(option) : getOptionLabel(option)}
                </li>
              );
            }}
            renderInput={(params) => (
              <>
                {other?.label && (
                  <FormLabel sx={{ color: "grey.100" }}>
                    {other?.label}
                  </FormLabel>
                )}
                <TextField
                  {...params}
                  label={""}
                  placeholder={placeholder}
                  error={Boolean(form?.fieldState?.error)}
                  helperText={
                    <Typography
                      component={"span"}
                      sx={{ display: "block", mt: -1, ml: -1 }}
                    >
                      {form?.fieldState?.error?.message}
                    </Typography>
                  }
                  variant={variant}
                  InputProps={{
                    ...params?.InputProps,
                    endAdornment: (
                      <Fragment>
                        {isLoading || isFetching ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : (
                          <Search sx={{ color: "inherit" }} />
                        )}
                        {params?.InputProps?.endAdornment}
                      </Fragment>
                    ),
                  }}
                />
              </>
            )}
          />
        );
      }}
    />
  );
}
