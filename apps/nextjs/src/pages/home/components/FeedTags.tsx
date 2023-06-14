import { useState } from "react";

import tags from "../data/tags.json";

const FeedTags = () => {
  const [activeTag, setActiveTag] = useState(0);
  return (
    <div className="flex flex-row space-x-4">
      {tags.map((tag, idx) => {
        const isActive = activeTag === idx;
        return (
          <div key={tag.name} onClick={() => setActiveTag(idx)}>
            <span
              className={`bg-${tag.color}-100 hover:bg-${tag.color}-200 text-${
                tag.color
              }-800 cursor-pointer select-none rounded border px-3 py-1 text-sm font-medium ${
                isActive ? `border-${tag.color}-500` : `border-${tag.color}-100`
              }`}
            >
              {tag.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeedTags;
