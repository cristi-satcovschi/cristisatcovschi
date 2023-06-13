import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div>
      {/* <aside className="fixed h-screen w-72 border-r">
        <Sidebar />
      </aside> */}
      <main className="">{children}</main>
    </div>
  );
}
