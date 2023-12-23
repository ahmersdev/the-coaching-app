import { useFormContext, Controller } from "react-hook-form";
import { FormLabel, TextField, Typography, useTheme } from "@mui/material";

export default function RHFTextField({ name, required, ...other }: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormLabel sx={{ color: "grey.100" }}>{other?.label}</FormLabel>
          <TextField
            {...field}
            fullWidth
            error={!!error}
            inputProps={{
              style: {
                color: theme?.palette?.grey?.[100],
              },
            }}
            sx={{
              mt: 0.5,
              ".MuiInputBase-root": {
                border: 1.5,
                borderColor: theme?.palette?.secondary?.[600],
                "&:hover": {
                  borderColor: theme?.palette?.primary?.[600],
                },
              },
            }}
            helperText={
              <Typography component={"span"} sx={{ display: "block", ml: -1 }}>
                {error?.message}
              </Typography>
            }
            {...other}
            label=""
          />
        </>
      )}
    />
  );
}
