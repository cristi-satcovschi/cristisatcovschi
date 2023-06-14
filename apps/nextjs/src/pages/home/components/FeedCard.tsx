import SectionCard from "./SectionCard";

const FeedCard = ({ children }) => {
  const date = new Date();

  return (
    <SectionCard>
      {children}

      <div className="flex flex-row justify-end">
        <div className="text-slate-800 mt-4 italic">
          {date.toLocaleDateString({
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </SectionCard>
  );
};

export default FeedCard;
