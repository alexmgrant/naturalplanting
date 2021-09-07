import { GSPlantDirCol, GSPlantDirRow } from '../../hooks/useGetPlantDirectory';

type Props = {
  cols: GSPlantDirCol[];
  rows: GSPlantDirRow[];
};

export default function Table({ cols = [], rows = [] }: Props) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map((col) => (
                    <th
                      key={col.id}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row, index) => (
                  <tr key={cols[index].id}>
                    {row.c.map((cell) => (
                      <td
                        key={cols[index].id}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {cell.v}
                        </div>
                        <div className="text-sm text-gray-500">{}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
