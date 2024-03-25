import { createContext, useState, useEffect } from "react";
const AnimationObserverContext = createContext(null);
const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const startAnimation = () => setIsAnimating(true);
  const stopAnimation = () => setIsAnimating(false);
  return (
    <AnimationObserverContext.Provider
      value={{ isAnimating, startAnimation, stopAnimation }}
    >
      {children}
    </AnimationObserverContext.Provider>
  );
};
export { AnimationObserverContext, AnimationProvider };
