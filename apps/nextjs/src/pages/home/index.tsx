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
        <title>App</title>
        <meta name="description" content="App desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* heading */}
        {/* <div className="bg-slate-200 h-64 border-b"></div> */}

        {/* apps */}
        <Apps />

        {/* content */}
        <div className="bg-slate-200 flex flex-row px-32 py-8">
          {/* content -- info */}
          <div className="m-8 w-1/3">
            <div className="flex flex-col space-y-8">
              <Servicii />
              <Contact />
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
