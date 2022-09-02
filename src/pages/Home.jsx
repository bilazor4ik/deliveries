import AllDeliveries from "../components/AllDeliveries";
import cat from "../assets/cat-in-dark.gif";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode.status ? (
        <img src={cat} className="w-48 h-auto absolute hidden xl:block" />
      ) : null}
      <div className="w-full overflow-hidden mx-4 xl:w-3/4 xl:mx-auto">
        
            <AllDeliveries />
         
      </div>
    </>
  );
}
