import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4">
        <article className="mx-auto w-full max-w-2xl">{children}</article>
      </div>
    </main>
  );
}
