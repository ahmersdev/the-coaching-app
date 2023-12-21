import { TableCell, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses?.head}`]: {
    color: theme?.palette?.grey?.[100],
    fontSize: "14px",
    lineHeight: "18px",
    borderBottom: "1px solid",
    borderColor: theme?.palette?.secondary?.[800],
    background: theme?.palette?.secondary?.main,
    fontWeight: 500,
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  [`&.${tableCellClasses?.body}`]: {
    fontSize: "12px",
    color: theme?.palette?.grey?.[400],
    borderBottom: "none",
    whiteSpace: "nowrap",
  },
}));
