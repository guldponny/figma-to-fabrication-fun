import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  title,
}) => {
  return (
    <div className="bg-[color:var(--colorNeutralBackground1)] w-full overflow-hidden mt-4 p-4 rounded-xl max-md:max-w-full">
      <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[#242424] text-sm font-semibold leading-5">
          {title}
        </h2>

        <div className="flex items-center gap-2.5 text-xs font-normal leading-4">
          <button className="justify-center items-center self-stretch flex gap-1 text-[#C50F1F] pr-[var(--Horizontal-S,] my-auto pl-[}] pt-[2px)] pb-[8px;] rounded-[4px)_4px_4px_4p] border-[Global.Stroke.Width.05] border-solid border-[NeutralStroke1.Rest]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/ad016b54cd70e4cee79bff27b41062b6a07f7a90?placeholderIfAbsent=true"
              alt="Remove"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch min-h-5 my-auto py-0.5">
              Remove all
            </span>
          </button>

          <button className="justify-center items-center self-stretch flex gap-1 text-[#242424] pr-[var(--Horizontal-S,] my-auto pl-[}] pt-[2px)] pb-[8px;] rounded-[4px)_4px_4px_4p] border-[Global.Stroke.Width.05] border-solid border-[NeutralStroke1.Rest]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/e1091c2d154a6045459766be6148e4ff50320519?placeholderIfAbsent=true"
              alt="Add"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch min-h-5 my-auto py-0.5">
              Add column
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/33523053a57247996175212df4d1d5bb4d6fe3f9?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </div>

      <div className="w-full mt-[13px]">
        <table className="w-full">
          <thead>
            <tr className="text-xs font-semibold text-[color:var(--colorNeutralForeground1Rest)]">
              <th className="w-[18px] pr-0.5">
                <input type="checkbox" className="w-4 h-4 rounded-sm" />
              </th>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="text-left py-2 font-semibold whitespace-nowrap"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-[#E0E0E0]">
                <td className="py-2">
                  <input type="checkbox" className="w-4 h-4 rounded-sm" />
                </td>
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="py-2 text-xs text-[#242424] font-normal"
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
