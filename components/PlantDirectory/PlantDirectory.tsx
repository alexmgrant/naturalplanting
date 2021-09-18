import React from 'react';
import {
  useTable,
  useGlobalFilter,
  TableInstance,
  FilterValue,
  TableState,
} from 'react-table';
import { Table } from 'components/Table';
import { usePlantDirectoryContext } from 'context/PlantDirectory';
import { Filters } from './components';

interface State extends TableState {
  globalFilter?: string;
}

interface Table extends TableInstance {
  setGlobalFilter?: (filterValue: FilterValue) => void;
  state: State;
}

export default function PlantDirectory() {
  const { plantDirectoryData } = usePlantDirectoryContext();
  const { columns, data } = plantDirectoryData;

  const { headerGroups, rows, state, prepareRow, setGlobalFilter }: Table =
    useTable({ columns, data }, useGlobalFilter);

  return (
    <>
      <Filters
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="mt-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <Table
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
        />
      </div>
    </>
  );
}
