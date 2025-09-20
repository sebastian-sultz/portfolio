import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">

            <img 
  src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,w_2000/v1757969282/project1_aggmiz.jpg" 
  srcset="
    https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,w_1100/v1757969282/project1_aggmiz.jpg,
    https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,w_1100/v1757969282/project1_aggmiz.jpg,
    https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,w_1600/v1757969282/project1_aggmiz.jpg ,
    https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,w_2000/v1757969282/project1_aggmiz.jpg 
  "
  alt="Moksha"
/>



              {/* <img src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto,w_1600/v1757969282/project1_aggmiz.jpg" alt="Ryde App Interface" /> */}
            </div>
            <div className="text-content">
              <h2>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 "> Moksha </span> — because sometimes, all you need is a gentle reminder that you’re not alone.
            </h2>
              <p className="text-white-50 md:text-xl">
              An app built with React.js, Node.js, Express.js, and MongoDB — styled with Material UI & TailwindCSS for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Sugar Rush"
                />
              </div>
              <h2>The E-Commerce Coffee Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#F3E8FF]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Project Management Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
