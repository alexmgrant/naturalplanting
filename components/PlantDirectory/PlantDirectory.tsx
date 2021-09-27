import React from 'react';
import {
  useTable,
  useGlobalFilter,
  TableInstance,
  FilterValue,
  TableState,
  useSortBy,
} from 'react-table';
import { columns } from 'data';
import { Table } from 'components/Table';
import { Filters } from './components';

interface State extends TableState {
  globalFilter?: string;
}

interface Table extends TableInstance {
  setGlobalFilter?: (filterValue: FilterValue) => void;
  state: State;
}

export default function PlantDirectory({ plants: data }) {
  const { headerGroups, rows, state, prepareRow, setGlobalFilter }: Table =
    useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <>
      <Filters
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="mt-8 shadow border-b border-gray-200 sm:rounded-lg">
        <Table
          headerGroups={headerGroups}
          rows={rows}
          prepareRow={prepareRow}
        />
      </div>
    </>
  );
}
