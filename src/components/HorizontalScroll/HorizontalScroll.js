import React from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  Header,
  BackgroundImg,
  Nav,
  Paragraph,
  Title,
  Section,
  Img,
} from "./style";

const imgs = ["./img/1.png", "./img/2.jpg", "./img/3.png"];

const HorizontalScroll = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <Header>
        <BackgroundImg src={imgs[1]} alt="background image" />
  
        <Paragraph>
          Lorem ipsum dolor sit amet.
        </Paragraph>
        <Title style={{ x }}>Better World For Pets.</Title>
      </Header>
    
    </>
  );
};

export default HorizontalScroll;
