import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getWiki } from './utilities';

enum TableRender {
  Header = 'Header',
  Cell = 'Cell',
}

const NameColumn = ({ name, row }) => {
  const {
    title = '',
    thumbnail = '',
    fullurl = '',
    image,
  } = { ...getWiki(row) };
  const alt = `Photo of ${title}`;

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          onClick={openModal}
          className="h-10 w-10 rounded-full cursor-pointer"
          src={thumbnail}
          alt={alt}
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">
          <a
            className="no-underline hover:underline hover:text-blue-700"
            href={fullurl}
          >
            {name}
          </a>
        </div>
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 sm:inset-1/4 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900 mb-4"
                >
                  <div className="flex justify-between">
                    {name}
                    <button
                      onClick={closeModal}
                      className="self-end text-gray-400 hover:text-gray-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Title>
                <img src={image} alt={alt} />
                <div className="mt-6">
                  <a
                    className="no-underline hover:underline text-blue-700"
                    href={fullurl}
                  >
                    <span className="flex flex-row items-center">
                      Wikipedia
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
          <Dialog.Overlay />
        </Dialog>
      </Transition>
    </div>
  );
};

export default function Table({ headerGroups, rows, prepareRow }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => {
                  const { key } = headerGroup.getHeaderGroupProps();

                  return (
                    <tr key={key}>
                      {headerGroup.headers.map((column) => {
                        const sortedHeaderProps = column.getHeaderProps(
                          column.getSortByToggleProps()
                        );
                        const { key } = sortedHeaderProps;

                        return (
                          <th
                            {...sortedHeaderProps}
                            key={key}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {column.render(TableRender.Header)}
                            <span className="pl-1">
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? ' 🔽'
                                  : ' 🔼'
                                : ''}
                            </span>
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
                      {row.cells.map((cell, index) => {
                        const { key } = cell.getCellProps();
                        const renderedCell = cell.render(TableRender.Cell);

                        return (
                          <td
                            key={key}
                            className="px-6 py-4 whitespace-nowrap relative"
                          >
                            <div className="text-sm font-medium text-gray-900">
                              {index === 0 ? (
                                <NameColumn name={renderedCell} row={row} />
                              ) : (
                                renderedCell
                              )}
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
