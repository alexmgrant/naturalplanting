import { Table } from '../../components';
import { usePlantDirectory } from '../../context/PlantDirectory';

export default function PlantDirectoryTable() {
  const { plantTable } = usePlantDirectory();
  const { cols, rows } = plantTable?.table || {};

  return <Table cols={cols} rows={rows} />;
}
