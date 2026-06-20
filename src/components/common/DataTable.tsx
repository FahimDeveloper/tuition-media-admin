/* eslint-disable @typescript-eslint/no-explicit-any */

import { Table } from "antd";
import { memo, useRef } from "react";

type TProps = {
  columns: any;
  data: Array<any>;
  loading: boolean;
};

const DataTable = memo(({ columns, data, loading }: TProps) => {
  const tableRef = useRef<any>(null);
  const props: any = {
    bordered: true,
    loading: loading,
    pagination: false,
    showHeader: true,
    size: "middle",
  };
  return (
    <>
      <Table
        {...props}
        ref={tableRef}
        columns={columns}
        rowKey={(record) => record?._id}
        dataSource={data}
      />
    </>
  );
});

export default DataTable;
