import React, { useEffect, useRef } from "react";
import arrow from "../images/down-arrow.png";
import { Link } from "react-scroll";
import { gsap } from "gsap";

export default function Landing() {
  let fakeH1 = "< h1 >";
  let fakeEndH1 = "< /h1 >";
  let fakeH2 = "< h2 >";
  let fakeEndH2 = "< /h2 >";
  let intro = "(I build web applications... the right way)";

  const imgRef = useRef();

  useEffect(() => {
    gsap.from([imgRef.current], {
      opacity: 0,
      y: "-3vh",
      height: "1vh",
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      ease: "back",
    });
  });

  return (
    <div className="landing">
      <div className="master-container">
        <div className="main-box">
          <p className="fakeCode"> {fakeH1}</p>
          <div className="big-letter-box">
            <h1>Hello.</h1>
            <h1 className="red">I'm</h1>
            <h1 className="red">Andrew</h1>
          </div>
          <p className="fakeCode"> {fakeEndH1}</p>
          <p className="fakeCode h2"> {fakeH2}</p>
          <p className="intro">{intro}</p>
          <p className="fakeCode h2"> {fakeEndH2}</p>
        </div>
      </div>
      <Link
        className="pull-down"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <p>Learn more about what I do</p>
        <img
          ref={imgRef}
          className="down-arrow"
          id="down-arrow"
          src={arrow}
          alt="down-arrow"
        />
      </Link>
    </div>
  );
}
