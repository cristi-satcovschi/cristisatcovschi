import AppCard from "../components/AppCard";
import apps from "../data/apps.json";

const Apps = () => (
  <div className="bg-slate-50 z-10 flex flex-row justify-center space-x-8 border-b py-16 shadow">
    {apps.map((app) => (
      <AppCard app={app} key={app.appName} />
    ))}
  </div>
);

export default Apps;
