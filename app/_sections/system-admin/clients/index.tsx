"use client";

import TanstackTable from "@/app/_components/table";
import { clientsColumns, clientsDataArray } from "./clients.data";

const Clients = () => {
  return (
    <TanstackTable
      data={clientsDataArray}
      columns={clientsColumns}
      isPagination
    />
  );
};

export default Clients;
