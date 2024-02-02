import { Box, Chip, Typography, useTheme } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { UploadFileIcon } from "@/app/_assets/icons";

export default function RHFUploadFile({
  name,
  required,
  borderRadius = 2,
  ...other
}: any) {
  const theme: any = useTheme();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <label htmlFor={name}>
            <Box
              borderRadius={borderRadius}
              border={1.5}
              borderColor={
                error
                  ? theme?.palette?.error?.[700]
                  : theme?.palette?.secondary?.[600]
              }
              p={1.6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  borderColor: theme?.palette?.primary?.[900],
                },
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {field?.value ? (
                  <video
                    src={URL.createObjectURL(field.value)}
                    width={24}
                    height={24}
                    muted
                  />
                ) : (
                  <UploadFileIcon />
                )}
                <Typography variant={"h6"} fontWeight={600} color={"grey.100"}>
                  {other?.label ?? "Introductory Video"}
                </Typography>
              </Box>

              <Chip
                label={"Upload Video"}
                sx={{
                  color: "grey.100",
                  border: "1px dashed",
                  borderColor: "grey.100",
                  background: "transparent",
                }}
              />
            </Box>
          </label>

          <input
            type="file"
            accept="video/*"
            disabled={other?.disabled}
            id={name}
            onChange={(event: any) => field.onChange(event?.target?.files?.[0])}
            style={{ display: "none" }}
          />
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{ display: "block", textAlign: "center" }}
            color={"error.700"}
          >
            {error && error?.message}
          </Typography>
        </>
      )}
    />
  );
}
