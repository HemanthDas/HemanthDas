import { useEffect, useState } from "react";
import App from "../App";
import man from "../assets/Man_Waving_Hand_Cartoon_Vector.svg";
import Typed from "typed.js";
const LandingPage = () => {
  const [isAnimated, setAnimated] = useState(
    localStorage.getItem("animationPlayed") === "true"
  );
  useEffect(() => {
    const labels = document.querySelectorAll("#logo path");
    const logo = document.getElementById("logo");
    const person = document.getElementById("person");
    const cloud = document.getElementById("cloud");
    const p1 = document.getElementById("page1");
    const p2 = document.getElementById("page2");
    function startAnimation() {
      const animationPromises = [];
      console.log(" bro");
      labels.forEach((label) => {
        const length = label.getTotalLength();
        label.style.strokeDasharray = length;
        label.style.strokeDashoffset = length;
        const animationPromise = label.animate(
          [
            {
              strokeDashoffset: length,
            },
            {
              strokeDashoffset: 0,
            },
          ],
          {
            duration: 2000,
            easing: "ease-in-out",
            fill: "forwards",
          }
        ).finished;
        animationPromises.push(animationPromise);
      });
      Promise.all(animationPromises).then(() => {
        logo
          .animate(
            [
              {},
              {
                transform: "scale(100) ",
                display: "none",
              },
            ],
            {
              duration: 2000,
              easing: "ease-in-out",
              delay: 1000,
              fill: "forwards",
            }
          )
          .finished.then(() => {
            personAnimation();
          });
      });
    }
    function personAnimation() {
      person.style.display = "block";

      person
        .animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 1000,
          easing: "ease-in-out",
          fill: "forwards",
        })
        .finished.then(() => {
          cloudAnimation();
        });
    }
    function cloudAnimation() {
      cloud.style.display = "block";
      cloud
        .animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 1000,
          easing: "ease-in-out",
          fill: "forwards",
        })
        .finished.then(() => {
          const textElement = document.getElementById("typed-text");
          const options = {
            strings: [
              "Hello...!",
              "I am Hemanth",
              "I am a web-dev",
              "I will Show you",
              "My Portfolio",
              "Come with me",
            ],
            typeSpeed: 50,
            backSpeed: 20,
            startDelay: 100,
            showCursor: false,
            onComplete: () => {
              next();
            },
          };

          const typed = new Typed(textElement, options);
        });
    }
    function next() {
      setTimeout(pageAnimation, 1000);
    }
    function pageAnimation() {
      p2.style.display = "block";
      p2.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        p1.classList.add("dont-show");
      }, 1000);
    }
    setAnimated(localStorage.getItem("animationPlayed") === "true");
    if (!isAnimated) {
      console.log("seriously");
      p1.classList.remove("dont-show");
      setAnimated(true);
      startAnimation();
      localStorage.setItem("animationPlayed", "true");
    } else {
      p1.classList.add("dont-show");
      p2.style.display = "block";
    }
  }, []);
  return (
    <>
      <div id="page1" className="dont-show">
        <svg
          id="logo"
          width="692"
          height="107"
          viewBox="0 0 692 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M617 100V102.5H619.5H686.409H688.909V100V79.6364V77.1364H686.409H647.273V66.1364H683.136H685.636V63.6364V43.2727V40.7727H683.136H647.273V29.7727H686.591H689.091V27.2727V6.90909V4.40909H686.591H619.5H617V6.90909V100Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M500.25 4.40909H497.75V6.90909V100V102.5H500.25H524.977H527.477V100V57.3051L544.101 100.177L544.72 101.773H546.432H561.341H563.049L563.67 100.182L580.295 57.5967V100V102.5H582.795H607.523H610.023V100V6.90909V4.40909H607.523H576.068H574.392L573.755 5.96002L553.886 54.3802L534.017 5.96002L533.381 4.40909H531.705H500.25Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M484.685 80.9172L484.687 80.9132C488.979 73.329 491.057 64.1368 491.057 53.4545C491.057 42.7738 488.98 33.5952 484.686 26.0394C480.436 18.5302 474.66 12.8027 467.37 8.93072C460.129 5.05467 452.083 3.13635 443.284 3.13635C434.427 3.13635 426.35 5.0535 419.106 8.93139C411.845 12.8045 406.085 18.5331 401.836 26.0414L401.834 26.0444C397.572 33.5991 395.511 42.7757 395.511 53.4545C395.511 64.0762 397.574 73.2346 401.832 80.8153L401.838 80.8262C406.087 88.3014 411.842 94.039 419.092 97.9705L419.104 97.9767C426.348 101.855 434.426 103.773 443.284 103.773C452.081 103.773 460.125 101.871 467.366 98.0262L467.373 98.0222C474.659 94.1214 480.434 88.3967 484.685 80.9172ZM457.991 40.2475L457.995 40.2586L458 40.2697C459.339 43.7153 460.057 48.0841 460.057 53.4545C460.057 58.824 459.34 63.2111 457.997 66.691L457.993 66.7009C456.688 70.1281 454.804 72.5968 452.404 74.2643C450.054 75.888 447.063 76.7727 443.284 76.7727C439.511 76.7727 436.502 75.8906 434.117 74.2635C431.748 72.5961 429.863 70.1257 428.528 66.696C427.213 63.2124 426.511 58.823 426.511 53.4545C426.511 48.0819 427.214 43.7087 428.528 40.2584C429.867 36.7895 431.754 34.3252 434.115 32.6926L434.12 32.6895C436.504 31.0329 439.512 30.1364 443.284 30.1364C447.057 30.1364 450.044 31.0333 452.393 32.6824L452.405 32.6911L452.418 32.6996C454.803 34.3313 456.684 36.7896 457.991 40.2475Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M386.909 44.3182H389.627L389.4 41.6095C388.893 35.5498 387.442 30.0923 385.003 25.279C382.581 20.5003 379.368 16.4515 375.364 13.1623C371.377 9.85758 366.761 7.36384 361.546 5.66796C356.326 3.97082 350.653 3.13635 344.545 3.13635C335.804 3.13635 327.816 5.05592 320.634 8.93474C313.403 12.8093 307.675 18.5389 303.458 26.0462C299.197 33.6005 297.136 42.7765 297.136 53.4545C297.136 64.0676 299.15 73.218 303.308 80.7939L303.312 80.8011C307.468 88.3139 313.151 94.0624 320.353 97.9701L320.357 97.9723C327.548 101.857 335.631 103.773 344.545 103.773C351.615 103.773 357.931 102.689 363.44 100.453C368.853 98.2558 373.459 95.3297 377.207 91.6468L377.207 91.6467C380.913 88.0049 383.806 84.0085 385.853 79.6546L385.856 79.6481C387.875 75.3231 389.073 71.0159 389.402 66.7372L389.607 64.0645L386.927 64.0455L361.29 63.8637L359.125 63.8483L358.801 65.9891C358.537 67.73 358.031 69.2489 357.307 70.5727L357.303 70.5801L357.299 70.5875C356.602 71.8812 355.703 72.9752 354.594 73.8871C353.498 74.7887 352.178 75.5089 350.603 76.0277C349.042 76.5114 347.214 76.7727 345.091 76.7727C341.404 76.7727 338.403 75.9182 335.97 74.3239C333.555 72.7116 331.621 70.2739 330.231 66.8458C328.868 63.3782 328.136 58.9425 328.136 53.4545C328.136 48.2824 328.849 43.9853 330.193 40.4986C331.558 37.0349 333.492 34.5062 335.94 32.7709C338.386 31.0578 341.451 30.1364 345.273 30.1364C347.459 30.1364 349.328 30.4508 350.915 31.0302L350.932 31.0362L350.949 31.042C352.554 31.6027 353.859 32.3957 354.91 33.3993L354.931 33.4193L354.953 33.4389C356.052 34.4402 356.909 35.6355 357.529 37.0496L357.536 37.0663L357.544 37.083C358.199 38.5204 358.622 40.1612 358.782 42.0317L358.978 44.3182H361.273H386.909Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M228 100V102.5H230.5H293.409H295.909V100V79.6364V77.1364H293.409H258.273V6.90909V4.40909H255.773H230.5H228V6.90909V100Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M148.375 100V102.5H150.875H217.784H220.284V100V79.6364V77.1364H217.784H178.648V66.1364H214.511H217.011V63.6364V43.2727V40.7727H214.511H178.648V29.7727H217.966H220.466V27.2727V6.90909V4.40909H217.966H150.875H148.375V6.90909V100Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M32.1135 100.707L32.6422 102.5H34.5114H58.6932H60.5458L61.085 100.728L74.875 55.3948L88.665 100.728L89.2042 102.5H91.0568H115.239H117.108L117.637 100.707L145.091 7.61628L146.037 4.40909H142.693H114.511H112.505L112.071 6.3684L101.245 55.2386L88.3839 6.27398L87.8941 4.40909H85.9659H63.7841H61.8575L61.3666 6.2721L48.5051 55.0838L37.6791 6.36676L37.2441 4.40909H35.2386H7.05682H3.71306L4.65893 7.61628L32.1135 100.707Z"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
        <div className="container">
          <object
            id="person"
            data={man}
            type="image/svg+xml"
            width="400"
            height="300"
          >
            <img src="fallback.png" alt="Animated SVG" />
          </object>
          <svg
            id="cloud"
            width="258"
            height="193"
            viewBox="0 0 258 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.3269 168.035L85.5002 168.749V167.656V141.039C85.5002 137.282 81.9444 134.116 77.4 134.116H43C28.547 134.116 16.7 123.988 16.7 111.347V37.1155C16.7 24.4738 28.547 14.3462 43 14.3462L215 14.3465C229.454 14.3465 241.3 24.4741 241.3 37.1157V111.347C241.3 123.988 229.454 134.116 215 134.116H129C126.83 134.116 124.761 134.861 123.245 136.169L122.939 135.814L123.245 136.169L86.3269 168.035ZM68.8 147.962H69.3V148.462V185.577C69.3 188.332 71.2265 190.873 74.2779 191.964L74.1096 192.435L74.278 191.964C77.3318 193.056 80.8402 192.445 83.1552 190.447L132.235 148.083L132.376 147.962H132.562H215C238.544 147.962 257.5 131.502 257.5 111.347V37.1157C257.5 16.9601 238.544 0.500297 215 0.500297L43 0.5C19.4565 0.5 0.5 16.9597 0.5 37.1155V111.347C0.5 131.502 19.4565 147.962 43 147.962H68.8Z"
              fill="white"
              stroke="white"
            />
            <text
              width="1em"
              x="40"
              y="90"
              fontFamily="Arial"
              id="typed-text"
            ></text>
          </svg>
        </div>
      </div>
      <App />
    </>
  );
};

export default LandingPage;
