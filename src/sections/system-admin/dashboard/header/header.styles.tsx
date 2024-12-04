export const boxStyles = (theme: any) => ({
  borderRadius: 6,
  padding: "24px 16px",
  borderLeft: `6px solid ${theme?.palette?.primary?.main}`,
  bgcolor: "secondary.main",
  height: "97px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ":hover": {
    boxShadow: theme?.CustomShadows?.()?.primary,
    "& .chip-hover": {
      bgcolor: theme?.palette?.primary?.main,
    },
  },
});

export const chipStyles = (theme: any) => ({
  width: "132px",
  height: "49px",
  bgcolor: theme?.palette?.secondary?.[900],
  borderRadius: "200px",
  color: theme?.palette?.grey?.[400],
  fontWeight: 600,
  fontSize: "24px",
});
