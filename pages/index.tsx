import Head from 'next/head';
// import Image from 'next/image';

import { PlantDirectoryProvider } from '../context/PlantDirectory';
import { Filters, PlantDirectoryTable } from '../components';

function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Natural Planting</title>
        <meta
          name="description"
          content="A resource for planting a natural garden."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"
        />
      </Head>

      <div className="max-w-7xl mx-auto mt-8 sm:pl-0 lg:pl-0 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Natural Planting
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8 sm:pl-0 lg:pl-0 px-4 sm:px-6 lg:px-8">
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
      <PlantDirectoryProvider>
        <Filters />
        <div className="mt-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <PlantDirectoryTable />
        </div>
      </PlantDirectoryProvider>
    </div>
  );
}

export default Home;
