import type { NextPage } from "next";
import Head from "next/head";

import FeedCard from "./components/FeedCard";
import FeedTags from "./components/FeedTags";
import Apps from "./sections/Apps";
import Contact from "./sections/Contact";
import Servicii from "./sections/Servicii";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cristi Șatcovschi</title>
        <meta name="description" content="App desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-200">
        {/* heading */}
        <div className="flex items-center justify-between border-b p-8">
          <div className="bg-slate-600 flex h-64 w-64 items-center justify-center rounded-full">
            <span className="text-slate-800 text-6xl">Logo</span>
          </div>
          <span className="text-zinc-900 select-none text-right text-8xl font-bold">
            Cristi <br />
            Șatcovschi
          </span>
        </div>

        {/* apps */}
        <Apps />

        {/* content */}
        <div className="flex flex-col px-4 pb-2 pt-12 lg:flex-row lg:px-32 lg:py-8">
          {/* content -- info */}
          <div className="m-2 lg:m-8 lg:w-1/3">
            <div className="flex flex-col space-y-8">
              <Servicii />
              <Contact />
            </div>
          </div>

          {/* content -- feed */}
          <div className="m-2 mt-6 lg:m-8 lg:w-2/3">
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
