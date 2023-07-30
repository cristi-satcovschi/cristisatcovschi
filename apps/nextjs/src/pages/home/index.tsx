import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import FeedCard from "./components/FeedCard";
import FeedTags from "./components/FeedTags";
import SectionCard from "./components/SectionCard";
import Apps from "./sections/Apps";
import Contact from "./sections/Contact";
import Servicii from "./sections/Servicii";

const Grid = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

const GridItem = ({ children, icon, link = "" }) => {
  return (
    <div className="group">
      <Link href={link}>
        <div
          className={`border-slate-200 h-24 w-24 rounded-xl ${
            !icon && "bg-slate-400 group-hover:bg-slate-300 border"
          }`}
        >
          {icon}
        </div>
        <div className="w-24 text-center">
          <span className="group-hover:text-slate-700 font-medium">
            {children}
          </span>
        </div>
      </Link>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cristi Șatcovschi</title>
        <meta name="description" content="App desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-200">
        {/* apps */}
        <Apps />

        {/* content */}
        <div className="flex flex-col px-4 pb-2 pt-12 lg:flex-row lg:px-32 lg:py-8">
          {/* info */}
          <div className="m-2 min-w-fit lg:m-8">
            <div className="flex flex-col space-y-8">
              {/* <Servicii /> */}
              <SectionCard>
                <h2 className="font-semibold">Logofoliu</h2>
                <hr className="mb-6 mt-4" />

                <Grid>
                  <GridItem>Cristi Satcovschi</GridItem>
                  <GridItem>Inventar</GridItem>
                  <GridItem>Studio Muzical</GridItem>
                  <GridItem>Collage Auto</GridItem>
                </Grid>
              </SectionCard>

              <SectionCard>
                <div className="flex justify-between">
                  <h2 className="font-semibold">Componente</h2>
                  <button
                    type="button"
                    className="bg-slate-400 hover:bg-slate-200 -my-1 rounded-lg border px-3 py-1"
                  >
                    20
                  </button>
                </div>
                <hr className="mb-6 mt-4" />

                <Grid>
                  <GridItem link="/componente/formular-cu-etape">
                    Formular cu Etape
                  </GridItem>
                  <GridItem>Calendar</GridItem>
                  <GridItem>Pagina de Listare</GridItem>
                  <GridItem>Pagina de Detalii</GridItem>
                  <GridItem>Pian</GridItem>
                  <GridItem>Elemente de Formular</GridItem>
                  <GridItem>Paginare</GridItem>
                  <GridItem>Autentificare</GridItem>
                  <GridItem>Statistici</GridItem>
                </Grid>
              </SectionCard>

              <SectionCard>
                <h2 className="font-semibold">Scripturi</h2>
                <hr className="mb-6 mt-4" />

                <Grid>
                  <GridItem
                    icon={
                      <div className="bg-sky-500 group-hover:bg-sky-400 text-sky-50 flex h-full w-full items-center justify-center rounded-xl text-5xl">
                        .vb
                      </div>
                    }
                  >
                    Genereaza campuri editable in Calc
                  </GridItem>
                  <GridItem
                    icon={
                      <div className="bg-yellow-400 group-hover:bg-yellow-300 text-yellow-50 flex h-full w-full items-center justify-center rounded-xl text-5xl">
                        .js
                      </div>
                    }
                  >
                    Populeaza baza de date cu Prisma
                  </GridItem>
                  <GridItem
                    icon={
                      <div className="bg-cyan-400 group-hover:bg-cyan-300 text-cyan-50 flex h-full w-full items-center justify-center rounded-xl text-5xl">
                        .ts
                      </div>
                    }
                  >
                    Genereaza sunete cu Elementary
                  </GridItem>
                </Grid>
              </SectionCard>

              <Contact />
            </div>
          </div>

          {/* feed */}
          <div className="m-2 mt-6 lg:m-8">
            <div className="space-y-8">
              <FeedTags />

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
