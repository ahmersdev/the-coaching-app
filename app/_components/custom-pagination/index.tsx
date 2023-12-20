import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton, Pagination, TablePagination } from "@mui/material";
import { styles } from "./custom-pagination.style";
import { Fragment } from "react";

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

  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={2}
        mt={3}
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
            <ArrowBackIcon />
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
            sx={styles?.counterStyle}
          />

          <IconButton
            disabled={currentPage === count}
            onClick={() => setPage?.((page: any) => page + 1)}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Fragment>
  );
};

export default CustomPagination;
