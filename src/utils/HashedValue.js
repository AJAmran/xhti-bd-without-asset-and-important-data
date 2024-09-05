import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const hashValue = hash.substring(1);
      const element = document.getElementById(hashValue);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
};

export default useScrollToSection;
