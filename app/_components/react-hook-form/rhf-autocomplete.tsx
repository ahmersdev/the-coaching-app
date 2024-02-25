import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Autocomplete,
  Typography,
  Paper,
  useTheme,
  FormLabel,
} from "@mui/material";

export default function RHFAutocomplete({
  name,
  options,
  required,
  noOptionsText = "Nothing in the List",
  multiple = false,
  placeholder,
  getOptionLabel = (option: any) => option?.replaceAll?.("_", " "),
  borderRadius = 2,
  bgcolor = "secondary.900",
  ...other
}: any) {
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

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            open={open}
            multiple={multiple}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            options={options}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, onChange);
            }}
            autoComplete
            noOptionsText={noOptionsText}
            value={value}
            getOptionLabel={getOptionLabel}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: "common.white",
                  borderRadius,
                }}
              >
                {props?.children}
              </Paper>
            )}
            {...other}
            renderInput={(params) => (
              <>
                {other?.label && (
                  <FormLabel sx={{ color: "grey.100" }}>
                    {other?.label}
                  </FormLabel>
                )}
                <TextField
                  {...params}
                  label=""
                  error={!!error}
                  placeholder={placeholder}
                  sx={{
                    mt: 0.5,
                    ".MuiInputBase-root": {
                      borderRadius: borderRadius,
                      border: 1.5,
                      bgcolor,
                      borderColor: theme?.palette?.secondary?.[600],
                      "&:hover": {
                        borderColor: theme?.palette?.primary?.[900],
                      },
                    },
                    ".MuiAutocomplete-input": {
                      color: theme?.palette?.grey?.[100],
                    },
                  }}
                  helperText={
                    <Typography
                      component={"span"}
                      sx={{ display: "block", mt: -1, ml: -1 }}
                    >
                      {error?.message}
                    </Typography>
                  }
                  InputProps={{
                    ...params?.InputProps,
                    endAdornment: <>{params?.InputProps?.endAdornment}</>,
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
