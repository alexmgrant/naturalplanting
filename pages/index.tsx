import Head from 'next/head';
// import Image from 'next/image';

import useGetPlantDirectory from '../hooks/useGetPlantDirectory';
import { Table } from '../components';

function Home() {
  const [plantTable] = useGetPlantDirectory();

  const { cols, rows } = plantTable?.table || {};

  return (
    <div className="container mx-auto">
      <Head>
        <title>Natural Planting</title>
        <meta
          name="description"
          content="A resource for planting a natural garden."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Natural Planting
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plant Directory
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A majority of plants used by{' '}
            <a
              href="https://oudolf.com/"
              className="no-underline hover:underline text-blue-700"
            >
              Piet Oudolf
            </a>
            .
          </p>
        </div>
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <Table cols={cols} rows={rows} />
      </div>
    </div>
  );
}

export default Home;
