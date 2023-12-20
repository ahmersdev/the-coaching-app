"use client";

import TanstackTable from "@/app/_components/table";
import { Fragment } from "react";
import { coachesColumns, coachesDataArray } from "./coaches.data";

const Coaches = () => {
  return (
    <Fragment>
      <TanstackTable
        data={coachesDataArray}
        columns={coachesColumns}
        isPagination
      />
    </Fragment>
  );
};

export default Coaches;
