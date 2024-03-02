import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  return (
    <>
      <button
        onClick={() => {
          setMatch(!match);
        }}
      >
        Toggle Match: ({String(match)})
      </button>
      {match && <div>{sign.match}</div>}
    </>
  );
}

export default Match;
