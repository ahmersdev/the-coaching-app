import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  IconButton,
  Pagination,
  TablePagination,
  useTheme,
} from "@mui/material";
import { styles } from "./custom-pagination.style";

const CustomPagination = (props: any) => {
  const {
    count = 1,
    rowsPerPageOptions = [5, 10, 15, 20],
    pageLimit = 10,
    currentPage = 1,
    onPageChange,
    setPage,
    setPageLimit,
    totalRecords = 0,
  } = props;

  const theme: any = useTheme();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={2}
        mt={2}
      >
        <TablePagination
          component="div"
          count={totalRecords}
          page={currentPage - 1}
          onPageChange={(_: any, page) => onPageChange?.(page)}
          rowsPerPage={pageLimit}
          onRowsPerPageChange={(event: any) => {
            const newPageLimit = parseInt(event?.target?.value, 10);
            const newPage =
              Math.floor(((currentPage - 1) * pageLimit) / newPageLimit) + 1;

            setPageLimit?.(newPageLimit);
            setPage?.(newPage);
          }}
          rowsPerPageOptions={rowsPerPageOptions}
          sx={styles?.tablePaginationStyle}
        />

        <Box
          display={"flex"}
          border={"1px solid"}
          borderColor={"grey.800"}
          borderRadius={2}
        >
          <IconButton
            disabled={currentPage === 1}
            onClick={() => setPage?.((page: any) => page - 1)}
          >
            <ArrowBackIcon sx={{ color: "grey.400" }} />
          </IconButton>

          <Pagination
            count={count}
            page={currentPage}
            boundaryCount={1}
            siblingCount={0}
            onChange={(_: any, page) => {
              onPageChange?.(page);
            }}
            hidePrevButton
            hideNextButton
            sx={{
              ".MuiPaginationItem-root": {
                width: 40,
                height: 40,
                borderRadius: 0,
                fontSize: "14px",
                color: "grey.400",
                backgroundColor: `${theme?.palette?.secondary?.main} !important`,
              },
            }}
          />

          <IconButton
            disabled={currentPage === count}
            onClick={() => setPage?.((page: any) => page + 1)}
          >
            <ArrowForwardIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default CustomPagination;
