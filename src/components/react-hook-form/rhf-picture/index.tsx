import { Avatar, Box, Chip, Typography, useTheme } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { UploadImageIcon } from "@/assets/icons";

export default function RHFPicture({
  name,
  required,
  borderRadius = 2,
  border = 1.5,
  bgcolor = "secondary.900",
  ...other
}: any) {
  const theme: any = useTheme();
  const { control } = useFormContext();

  const isFileInstance = (value: any) => value instanceof File;
  const isStringUrl = (value: any) => typeof value === "string";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <label htmlFor={name}>
            <Box
              borderRadius={borderRadius}
              border={border}
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
                bgcolor,
                "&:hover": {
                  borderColor: theme?.palette?.primary?.[900],
                },
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {isFileInstance(field.value) ? (
                  <Avatar
                    src={URL.createObjectURL(field.value)}
                    alt={"Uploaded"}
                    variant={"rounded"}
                    sx={{ width: 52, height: 52 }}
                  />
                ) : isStringUrl(field.value) ? (
                  <Avatar
                    src={field.value}
                    alt={"Uploaded"}
                    variant={"rounded"}
                    sx={{ width: 52, height: 52 }}
                  />
                ) : (
                  <UploadImageIcon />
                )}
                <Typography variant={"h6"} fontWeight={600} color={"grey.100"}>
                  {other?.label ?? "Add Your Image"}
                </Typography>
              </Box>

              <Chip
                label={"Upload Image"}
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
            accept="image/*"
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
