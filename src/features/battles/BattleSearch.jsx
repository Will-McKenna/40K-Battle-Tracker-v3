import { useState } from "react";

const BattleSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
        placeholder="Search Battles..."
      />
    </div>
  );
};

export default BattleSearch;
