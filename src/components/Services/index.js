import React from "react";
import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH1,
  ServicesP,
  ServicesIcon,
  ServicesH2,
} from "./ServicesElements";
function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={svg1} />
          <ServicesH2>5G mobile and infrastructure</ServicesH2>
          <ServicesP>
            Designing flexible advanced wireless communications for the smart,
            connected world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={svg2} />
          <ServicesH2>AI & deep learning</ServicesH2>
          <ServicesP>
            Harnessing neural networks to accelerate machine learning,
            automatically quantizes and converts networks
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={svg3} />
          <ServicesH2>Computer vision</ServicesH2>
          <ServicesP>
            Outstanding image quality and intelligent vision processing for
            embedded designs
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
