import React, { useState } from "react";
import {
  VideoBg,
  HeroBg,
  HeroContainer,
  HeroP,
  HeroH1,
  ArrowForward,
  ArrowRight,
  HeroContent,
  HeroBtnWrapper,
} from "./HeroElements";
import video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Software Development Services</HeroH1>
        <HeroP>
          Signal proccessing, sensor fusion and AI processors for a smarter,
          connected world
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
