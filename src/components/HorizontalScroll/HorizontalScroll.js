import React, {useEffect} from "react";
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
import './HorizontalScroll.css';
import AOS from "aos";
import 'aos/dist/aos.css';

const imgs = ["./img/1.png", "./img/2.jpg", "./img/3.png"];

const HorizontalScroll = () => {
  useEffect(()=> {
    AOS.init({duration: 2500});
  }, []);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <Header>
        <div className="overlay">
          <BackgroundImg src={imgs[1]} alt="background image" data-aos="fade-in" id="bg-img" />
        </div>
        
  
        <Paragraph>
          Lorem ipsum dolor sit.
        </Paragraph>
        <Title style={{ x }}>Better World For Pets.</Title>
      </Header>
    
    </>
  );
};

export default HorizontalScroll;
