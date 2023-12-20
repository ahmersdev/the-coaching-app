import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
} from "@mui/material";
import useTanstackTable from "./useTanstackTable";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  StyledTableCell,
  StyledTableRow,
  styles,
} from "./tanstack-table.styles";
import { flexRender } from "@tanstack/react-table";
import SkeletonTable from "../skeletons/skeleton-table";
import CustomPagination from "../custom-pagination";

const TanstackTable = (props: any) => {
  const {
    columns = [],
    data = [],
    rootSX,
    showSerialNo = false,
    isLoading = false,
    isFetching = false,
    isError = false,
    isSuccess = true,
    isPagination,
    count,
    pageLimit,
    rowsPerPageOptions,
    currentPage,
    totalRecords,
    onPageChange,
    setPage,
    setPageLimit,
  } = props;

  const table = useTanstackTable(data, columns, showSerialNo);
  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <Grid container sx={{ position: "relative", ...rootSX }}>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                {table?.getHeaderGroups()?.map((headerGroup: any) => (
                  <TableRow key={headerGroup}>
                    {headerGroup?.headers?.map((header: any) => (
                      <StyledTableCell key={header}>
                        <Box sx={styles?.cell}>
                          {header?.isPlaceholder
                            ? null
                            : flexRender(
                                header?.column?.columnDef?.header,
                                header?.getContext()
                              )}

                          {header?.column?.columnDef?.isSortable && (
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              marginLeft={"4px"}
                              gap={"2px"}
                              {...{
                                onClick:
                                  header?.column?.getToggleSortingHandler(),
                              }}
                            >
                              <ArrowDropUpIcon />
                              <ArrowDropDownIcon />
                            </Box>
                          )}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>

              <TableBody>
                {isSuccess &&
                  !isError &&
                  table?.getRowModel()?.rows?.map((row: any) => (
                    <StyledTableRow key={row}>
                      {row?.getVisibleCells()?.map((cell: any) => (
                        <StyledTableCell key={cell}>
                          {flexRender(
                            cell?.column?.columnDef?.cell,
                            cell?.getContext()
                          )}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            {isError ? (
              <>Error</>
            ) : (
              !!!table?.getRowModel()?.rows?.length && isSuccess && <>No Data</>
            )}
          </TableContainer>
        </Grid>
      </Grid>
      {isPagination && (
        <>
          <br />
          <br />
          <CustomPagination
            count={count}
            pageLimit={pageLimit}
            rowsPerPageOptions={rowsPerPageOptions}
            currentPage={currentPage}
            totalRecords={totalRecords}
            onPageChange={(page: any) => onPageChange?.(page)}
            setPage={setPage}
            setPageLimit={setPageLimit}
          />
        </>
      )}
    </>
  );
};

export default TanstackTable;
