import React, { useContext, useEffect } from "react";
import { AnimationObserverContext } from "./animationobserver";

const AnimatedElement = ({ children, animationOptions }) => {
  const { isAnimating, startAnimation, stopAnimation } = useContext(
    AnimationObserverContext
  );

  const elementRef = React.createRef();
  useEffect(() => {
    observer.observe(elementRef.current);
    return () => observer.unobserve(elementRef.current);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      elementRef.current.classList.add("animated"); // Example
    } else {
      elementRef.current.classList.remove("animated"); // Example
    }
  }, [isAnimating]);

  return (
    <div
      ref={elementRef}
      className={`animated-element ${isAnimating ? "animate" : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
