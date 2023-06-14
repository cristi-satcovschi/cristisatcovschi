import { useState } from "react";
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

const InfoCard = ({ children }) => {
  return <div className="bg-slate-50 rounded p-6 shadow">{children}</div>;
};

const FeedCard = ({ children }) => {
  const date = new Date();

  return (
    <div className="bg-slate-50 rounded p-4 shadow">
      {children}

      <div className="flex flex-row justify-end">
        <div className="text-slate-800 mt-4 italic">
          {date.toLocaleDateString({
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

const FeedTags = () => {
  const [activeTag, setActiveTag] = useState(0);
  return (
    <div className="flex flex-row space-x-4">
      <span
        onClick={() => setActiveTag(0)}
        className={`bg-emerald-100 hover:bg-emerald-200 text-emerald-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
          activeTag === 0 ? "border-emerald-500" : "border-emerald-100"
        }`}
      >
        design
      </span>
      <span
        onClick={() => setActiveTag(1)}
        className={`bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
          activeTag === 1 ? "border-fuchsia-500" : "border-fuchsia-100"
        }`}
      >
        dezvoltare
      </span>
      <span
        onClick={() => setActiveTag(2)}
        className={`bg-blue-100 hover:bg-blue-200 text-blue-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
          activeTag === 2 ? "border-blue-500" : "border-blue-100"
        }`}
      >
        inventar
      </span>
      <span
        onClick={() => setActiveTag(3)}
        className={`bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
          activeTag === 3 ? "border-red-400" : "border-red-100"
        }`}
      >
        collage auto
      </span>
      <span
        onClick={() => setActiveTag(4)}
        className={`bg-yellow-100 hover:bg-yellow-200 text-yellow-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
          activeTag === 4 ? "border-yellow-500" : "border-yellow-100"
        }`}
      >
        studio muzical
      </span>
    </div>
  );
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
              <InfoCard>
                <h2 className="font-semibold">Servicii</h2>
                <hr className="mb-6 mt-4" />

                <ul className="space-y-2">
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/design.png"
                      alt="design"
                    />
                    <div className="flex flex-grow items-center">
                      <span className="text-slate-900 font-medium">Design</span>
                    </div>
                  </li>
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/source-code.png"
                      alt="design"
                    />
                    <div className="flex flex-grow items-center">
                      <span className="text-slate-900 font-medium">
                        Dezvoltare
                      </span>
                    </div>
                  </li>
                </ul>
              </InfoCard>

              <InfoCard>
                <h2 className="font-semibold">Contact</h2>
                <hr className="mb-6 mt-4" />

                <ul className="space-y-2">
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/email-sign.png"
                      alt="email-sign"
                    />
                    <div className="flex flex-grow items-center">
                      <a
                        className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
                        href="mailto: cristi.satcovschi@gmail.com?subject = Feedback&body = Message"
                      >
                        cristi.satcovschi@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/facebook-messenger.png"
                      alt="facebook-messenger"
                    />
                    <div className="flex flex-grow items-center">
                      <a
                        className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
                        href="https://m.me/cristi.satcovschi"
                      >
                        m.me/cristi.satcovschi
                      </a>
                    </div>
                  </li>
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/instagram-new--v1.png"
                      alt="instagram-new--v1"
                    />
                    <div className="flex flex-grow items-center">
                      <a
                        className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
                        href="https://www.instagram.com/cristi.satcovschi"
                      >
                        instagram.com/cristi.satcovschi
                      </a>
                    </div>
                  </li>
                  <li className="flex flex-row space-x-8">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/stickers/100/github.png"
                      alt="github"
                    />
                    <div className="flex flex-grow items-center">
                      <a
                        className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
                        href="https://github.com/cristi-satcovschi"
                      >
                        github.com/cristi-satcovschi
                      </a>
                    </div>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>

          {/* content -- feed */}
          <div className="m-8 w-2/3">
            <div className="space-y-8">
              <div className="bg-slate-50 flex flex-col space-y-4 rounded p-4 shadow">
                <div>
                  <h2>Filtreaza postarile dupa categorie:</h2>
                </div>

                <FeedTags />
              </div>
              <FeedCard>
                <img
                  className="float-right rotate-12"
                  width="64"
                  height="64"
                  src="https://img.icons8.com/stickers/100/new.png"
                  alt="new"
                />
                <h2 className="font-semibold">Post title</h2>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur maiores voluptas beatae, repellendus sint, ut
                officia animi ratione alias dolor, libero excepturi! Reiciendis
                velit magni nulla corrupti enim dolor necessitatibus.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat possimus, distinctio explicabo, harum incidunt hic
                dolore sequi aspernatur quibusdam non eveniet, recusandae illum
                omnis at sit consectetur commodi culpa autem. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Placeat possimus,
                distinctio explicabo, harum incidunt hic dolore sequi aspernatur
                quibusdam non eveniet, recusandae illum omnis at sit consectetur
                commodi culpa autem. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Placeat possimus, distinctio explicabo, harum
                incidunt hic dolore sequi aspernatur quibusdam non eveniet,
                recusandae illum omnis at sit consectetur commodi culpa autem.
              </FeedCard>

              {[...Array(5).keys()].map((feedItem) => (
                <FeedCard key={feedItem}>
                  <h2 className="font-semibold">Post title</h2>
                  <br />
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
