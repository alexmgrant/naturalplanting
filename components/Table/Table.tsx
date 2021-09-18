import { HeaderGroup, Row } from 'react-table';

enum TableRender {
  Header = 'Header',
  Cell = 'Cell',
}

type Props = {
  headerGroups: HeaderGroup[];
  rows: Row[];
  prepareRow: (row: Row) => void;
};

export default function Table({ headerGroups, rows, prepareRow }: Props) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => {
                  const { key } = headerGroup.getHeaderGroupProps();

                  return (
                    <tr key={key}>
                      {headerGroup.headers.map((column) => {
                        const { key } = column.getHeaderProps();

                        return (
                          <th
                            key={key}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {column.render(TableRender.Header)}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => {
                  prepareRow(row);
                  const { key } = row.getRowProps();

                  return (
                    <tr key={key}>
                      {row.cells.map((cell) => {
                        const { key } = cell.getCellProps();

                        return (
                          <td key={key} className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {cell.render(TableRender.Cell)}
                            </div>
                            {/* <div className="text-sm text-gray-500">{}</div> */}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
