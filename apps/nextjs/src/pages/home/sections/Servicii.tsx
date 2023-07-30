import SectionCard from "../components/SectionCard";

const Servicii = () => (
  <SectionCard>
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
          <span className="text-slate-900 font-medium">Dezvoltare</span>
        </div>
      </li>
      <li>
        <div className="font-medium">
          <span className="border-slate-400 mx-1 border border-dashed p-2">
            Design
          </span>{" "}
          si{" "}
          <pre className="mx-1 inline-block">
            {"<"}
            <span className="text-green-600">dezvoltare</span> {"/>"}
          </pre>
          aplicatii web si native.
        </div>
      </li>
    </ul>
  </SectionCard>
);

export default Servicii;
