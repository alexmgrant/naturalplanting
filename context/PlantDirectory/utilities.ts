import { GSPlantDirectory } from '../../hooks/useGetPlantDirectory';

const filterTable = (plantDirectory: GSPlantDirectory) => (query: string) => {
  const { table } = plantDirectory;

  return {
    ...plantDirectory,
    table: {
      ...table,
      rows: table.rows.filter((row) =>
        row.c.some(({ v: value }) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      ),
    },
  };
};

export { filterTable };
