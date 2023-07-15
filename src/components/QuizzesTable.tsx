import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "react-bootstrap";

type Quiz = {
  name: string;
};
const defaultData: Quiz[] = [
  {
    name: "Solar System Quiz",
  },
  {
    name: "Bay Area Quiz",
  },
  {
    name: "LCOY Quiz",
  },
];

const columnHelper = createColumnHelper<Quiz>();
const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Quiz Name",
  }),
  columnHelper.display({
    id: "Edit",

    cell: (props) => <Button>Edit</Button>,
  }),
  columnHelper.display({
    id: "Delete",
    cell: (props) => <Button variant="danger">Delete</Button>,
  }),
];

export default function QuizzesTable() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="my-5 p-2 border">
      <table className="table table-striped table-hover">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="col-11">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      {/* <button onClick={() => rerender()} className="border p-2">
            Rerender
          </button> */}
    </div>
  );
}
