import { createContext, useMemo, useState } from "react";
import PropType from "prop-types";
const AnimationObserverContext = createContext(null);
const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const startAnimation = () => setIsAnimating(true);
  const stopAnimation = () => setIsAnimating(false);
  const value = useMemo(
    () => ({
      isAnimating,
      startAnimation,
      stopAnimation,
    }),
    [isAnimating]
  );
  return (
    <AnimationObserverContext.Provider value={value}>
      {children}
    </AnimationObserverContext.Provider>
  );
};
AnimationProvider.propTypes = {
  children: PropType.node.isRequired,
};
export { AnimationObserverContext, AnimationProvider };
