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
    </ul>
  </SectionCard>
);

export default Servicii;
