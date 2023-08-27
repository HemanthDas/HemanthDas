import { useEffect } from "react";
import jdata from "../assets/journeyData.json";
import Set from "../components/set";
import { useState } from "react";
import { useRef } from "react";
const Journey = () => {
  const data = JSON.parse(JSON.stringify(jdata));
  const [isVisble, setVisble] = useState(false);
  const pageRef = useRef(null);
  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisble(entry.isIntersecting);
      });
    }, option);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);
  return (
    <div className="journey" id="about" ref={pageRef}>
      <div className={"up-spike " + (isVisble && "up-ani")}>
        {data.map(
          (item) =>
            item.id < 5 && (
              <Set
                key={item.id}
                tag={item.id}
                txt={item.txt}
                type={"up"}
                title={item.year}
              />
            )
        )}
      </div>
      <div className={"full-line " + (isVisble && "line-anime")}></div>
      <div className={"down-spike " + (isVisble && "down-ani")}>
        {data.map(
          (item) =>
            item.id > 4 && (
              <Set
                key={item.id}
                tag={item.id}
                txt={item.txt}
                title={item.year}
              />
            )
        )}
      </div>
      <div className="containSvg">
        <svg
          width="500"
          height="554"
          viewBox="0 0 200 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5C78.8008 5 126.174 5 155.031 5C177.123 5 195 22.9086 195 45V45C195 67.0914 177.091 85 155 85H122.134C94.9609 85 81.3528 117.853 100.567 137.067V137.067C106.287 142.787 114.044 146 122.134 146H147.5C163.792 146 177 159.208 177 175.5V175.5C177 191.792 163.792 205 147.5 205H86.1368C62.0384 205 38.9269 214.573 21.8868 231.613L4 249.5"
            stroke="white"
            strokeWidth="8"
          />
        </svg>
        <Set key={1} tag={1} txt={"hello World"} title={"2021"} />
      </div>
    </div>
  );
};

export default Journey;
