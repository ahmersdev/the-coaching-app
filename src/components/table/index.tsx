import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import useTanstackTable from "./use-tanstack-table";
import { StyledTableCell } from "./tanstack-table.styles";
import { flexRender } from "@tanstack/react-table";
import CustomPagination from "../custom-pagination";
import { TableDownArrowIcon, TableUpArrowIcon } from "@/assets/icons";
import { SkeletonTable } from "../skeletons";
import NoData from "../no-data";

const TanstackTable = (props: any) => {
  const {
    columns = [],
    data = [],
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

  const table = useTanstackTable(data, columns);
  if (isLoading || isFetching) return <SkeletonTable />;

  return (
    <>
      <TableContainer
        sx={{
          border: "1px solid",
          borderColor: "secondary.800",
          borderRadius: 4.5,
        }}
      >
        <Table>
          <TableHead>
            {table?.getHeaderGroups()?.map((headerGroup: any, index: any) => (
              <TableRow key={index}>
                {headerGroup?.headers?.map((header: any, index: any) => (
                  <StyledTableCell key={index}>
                    <Box display={"flex"} alignItems={"center"}>
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
                          marginLeft={0.7}
                          gap={0.2}
                          {...{
                            onClick: header?.column?.getToggleSortingHandler(),
                          }}
                        >
                          <TableUpArrowIcon />
                          <TableDownArrowIcon />
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
              table?.getRowModel()?.rows?.map((row: any, rowIndex: number) => (
                <TableRow key={rowIndex}>
                  {row?.getVisibleCells()?.map((cell: any, index: any) => (
                    <StyledTableCell
                      key={index}
                      sx={{
                        bgcolor:
                          rowIndex % 2 === 0 ? "initial" : "secondary.800",
                      }}
                    >
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext()
                      )}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {isError ? (
          <>Error</>
        ) : (
          !!!table?.getRowModel()?.rows?.length && isSuccess && <NoData />
        )}
      </TableContainer>

      {isPagination && (
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
      )}
    </>
  );
};

export default TanstackTable;
