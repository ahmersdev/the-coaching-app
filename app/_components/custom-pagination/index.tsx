import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
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

  const theme = useTheme();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box>
          <TablePagination
            component="div"
            count={totalRecords}
            page={currentPage - 1}
            onPageChange={(_: any, page) => onPageChange?.(page)}
            rowsPerPage={pageLimit}
            onRowsPerPageChange={(event: any) => {
              setPageLimit?.(parseInt(event?.target?.value, 10));
              setPage?.(0);
            }}
            rowsPerPageOptions={rowsPerPageOptions}
            sx={styles?.tablePaginationStyle(theme)}
          />
        </Box>
        <Box display={"flex"}>
          <IconButton
            disabled={currentPage === 1}
            onClick={() => setPage?.((page: any) => page - 1)}
            sx={styles?.iconStyleTwo(theme)}
          >
            <ArrowCircleLeftIcon />
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
            sx={styles?.paddingStyle(theme)}
          />
          <IconButton
            disabled={currentPage === count}
            onClick={() => setPage?.((page: any) => page + 1)}
            sx={styles?.iconStyle(theme)}
          >
            <ArrowCircleRightIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default CustomPagination;
