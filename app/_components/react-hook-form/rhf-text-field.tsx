import { useFormContext, Controller } from "react-hook-form";
import { FormLabel, TextField, Typography, useTheme } from "@mui/material";

export default function RHFTextField({
  name,
  borderRadius = 2,
  bgcolor = "secondary.900",
  ...other
}: any) {
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
                borderRadius: borderRadius,
                border: 1.5,
                bgcolor,
                borderColor: theme?.palette?.secondary?.[600],
                "&:hover": {
                  borderColor: theme?.palette?.primary?.[900],
                },
              },
            }}
            helperText={
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ display: "block", textAlign: "center" }}
                color={"error.700"}
              >
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
