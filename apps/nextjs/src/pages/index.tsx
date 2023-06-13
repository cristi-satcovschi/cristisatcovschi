import type { NextPage } from "next";
import Head from "next/head";

const apps = [
  {
    logoName: "Inv",
    appName: "Inventar",
    description: "Sistem de gestionare a inventarului.",
  },
  {
    logoName: "Muz",
    appName: "Studio Muzical",
    description: "Studio muzical.",
  },
  {
    logoName: "Col",
    appName: "Collage Auto",
    description: "Website de prezentare pentru vanzare de masini.",
  },
];

const tags = [
  {
    name: "design",
    color: "emerald",
  },
  {
    name: "dezvoltare",
    color: "fuchsia",
  },
  {
    name: "inventar",
    color: "green",
  },
  {
    name: "studio muzical",
    color: "blue",
  },
  {
    name: "collage auto",
    color: "red",
  },
];

const AppCard = ({ app }) => {
  return (
    <div className="bg-slate-300  h-96 w-64 cursor-pointer rounded-lg p-4 shadow transition-all hover:scale-105 hover:shadow-lg">
      <div className="flex flex-row items-center">
        <div className="bg-slate-100 text-gray-700 flex h-12 w-12 items-center justify-center rounded-xl font-bold">
          {app.logoName}
        </div>
        <div className="ml-4 font-semibold">{app.appName}</div>
      </div>
      <div className="mt-4">{app.description}</div>
    </div>
  );
};

const FeedCard = ({ children }) => {
  return <div className="bg-slate-50 rounded p-4 shadow">{children}</div>;
};

const InfoCard = ({ children }) => {
  return <div className="bg-slate-50 rounded p-4 shadow">{children}</div>;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="App desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* heading */}
        <div className="bg-slate-200 h-64 border-b"></div>

        {/* apps */}
        <div className="bg-slate-50 z-10 flex flex-row justify-center space-x-8 border-b py-16 shadow">
          {apps.map((app) => (
            <AppCard app={app} key={app.appName} />
          ))}
        </div>

        {/* content */}
        <div className="bg-slate-200 flex flex-row px-32 py-8">
          {/* content -- info */}
          <div className="m-8 w-1/3">
            <div className="flex flex-col space-y-8">
              <InfoCard>Info</InfoCard>
              <InfoCard>Servicii</InfoCard>
              <InfoCard>Contact</InfoCard>
            </div>
          </div>

          {/* content -- feed */}
          <div className="m-8 w-2/3">
            <div className="space-y-8">
              <div className="bg-slate-50 flex flex-col space-y-4 rounded p-4 shadow">
                <div>
                  <h2>Filtreaza postarile dupa categorie:</h2>
                </div>

                <div className="flex flex-row space-x-4">
                  <span className="bg-emerald-100 text-emerald-800 rounded px-3 py-1 text-sm font-medium">
                    design
                  </span>
                  <span className="bg-fuchsia-100 text-fuchsia-800 rounded px-3 py-1 text-sm font-medium">
                    dezvoltare
                  </span>
                  <span className="bg-blue-100 text-blue-800 rounded px-3 py-1 text-sm font-medium">
                    inventar
                  </span>
                  <span className="bg-red-100 text-red-800 rounded px-3 py-1 text-sm font-medium">
                    collage auto
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 rounded px-3 py-1 text-sm font-medium">
                    studio muzical
                  </span>
                </div>
              </div>

              {[...Array(5).keys()].map((feedItem) => (
                <FeedCard key={feedItem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur maiores voluptas beatae, repellendus sint, ut
                  officia animi ratione alias dolor, libero excepturi!
                  Reiciendis velit magni nulla corrupti enim dolor
                  necessitatibus.
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat possimus, distinctio explicabo, harum incidunt hic
                  dolore sequi aspernatur quibusdam non eveniet, recusandae
                  illum omnis at sit consectetur commodi culpa autem. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                  possimus, distinctio explicabo, harum incidunt hic dolore
                  sequi aspernatur quibusdam non eveniet, recusandae illum omnis
                  at sit consectetur commodi culpa autem. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Placeat possimus,
                  distinctio explicabo, harum incidunt hic dolore sequi
                  aspernatur quibusdam non eveniet, recusandae illum omnis at
                  sit consectetur commodi culpa autem.
                </FeedCard>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
