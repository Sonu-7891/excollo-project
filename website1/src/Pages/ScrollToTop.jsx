import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

const ScrollRestoration = ({ children }) => {
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if navigation type is POP (browser back/forward)
    if (navigationType === "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // or 'auto' for instant scrolling
      });
    }
  }, [navigationType]);

  return children;
};

export default ScrollRestoration;
