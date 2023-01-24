//non-actif
import { useState } from "react";
import { createContext } from "react";

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banner, setBanner] = useState("home");
  const toggleBanner = () => {
    setBanner(banner === "home" ? "home" : "about");
  };

  return (
    <BannerContext.Provider value={{ banner, toggleBanner }}>
      {children}{" "}
    </BannerContext.Provider>
  );
};
