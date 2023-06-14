const AppCard = ({ app }) => {
  return (
    <div>
      <div className="bg-slate-300 h-96 w-64 cursor-pointer rounded-lg p-4 shadow transition-all hover:scale-105 hover:shadow-lg">
        <div className="flex flex-row items-center">
          <div className="bg-slate-100 text-gray-700 flex h-12 w-12 items-center justify-center rounded-xl font-bold">
            {app.logoName}
          </div>
          <div className="ml-4 font-semibold">{app.appName}</div>
        </div>
        <div className="mt-4">{app.description}</div>
      </div>
    </div>
  );
};

export default AppCard;
