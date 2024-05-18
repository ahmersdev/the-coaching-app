"use client";

import TanstackTable from "@/components/table";
import { coachesColumns, coachesDataArray } from "./coaches.data";

const Coaches = () => {
  return (
    <TanstackTable
      data={coachesDataArray}
      columns={coachesColumns}
      isPagination
    />
  );
};

export default Coaches;
