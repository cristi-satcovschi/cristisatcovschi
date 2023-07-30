const SectionCard = ({ children, className = "" }) => {
  return (
    <div className={"bg-slate-50 rounded p-6 shadow" + className}>
      {children}
    </div>
  );
};

export default SectionCard;
