import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);

  const { setCurrentSign } = useContext(HoroscopeContext);

  const clickHandler = (event) => {
    setCurrentSign(event.target.textContent);
  };

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={clickHandler}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
