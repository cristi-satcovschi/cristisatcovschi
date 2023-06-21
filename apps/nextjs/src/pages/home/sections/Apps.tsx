import AppCard from "../components/AppCard";
import apps from "../data/apps.json";

const Apps = () => (
  <div className="bg-slate-50 z-10 flex flex-row space-x-8 overflow-x-scroll border-b p-16 shadow lg:justify-center lg:overflow-x-auto">
    {apps.map((app) => (
      <AppCard app={app} key={app.appName} />
    ))}
  </div>
);

export default Apps;
