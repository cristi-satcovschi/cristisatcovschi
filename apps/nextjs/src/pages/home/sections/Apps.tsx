import AppCard from "../components/AppCard";
import apps from "../data/apps.json";

const Apps = () => (
  <div
    className="bg-slate-50 z-50 flex flex-row space-x-8 overflow-x-scroll border-b p-16 shadow lg:justify-center lg:overflow-x-auto"
    // style={{
    //   boxShadow:
    //     "rgba(3, 7, 18, 0.02) 0px 0px 1px, rgba(3, 7, 18, 0.04) 0px 0px 5px, rgba(3, 7, 18, 0.06) 0px 0px 12px, rgba(3, 7, 18, 0.08) 0px 0px 20px, rgba(3, 7, 18, 0.1) 0px 0px 32px",
    // }}
  >
    {apps.map((app) => (
      <AppCard app={app} key={app.appName} />
    ))}
  </div>
);

export default Apps;
