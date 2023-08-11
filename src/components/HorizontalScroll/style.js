import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.9;
`;

export const Title = styled(motion.h1)`
  font-family: Avenir;
  color: white;
  font-size: 10em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s ease-in-out;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 0 2em;
  margin: 30px 30px 30px auto;
  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: green;
    }
  }
`;

export const Paragraph = styled.p`
  max-width: 900px;
  font-size: 74px;
  position: relative;
  // margin: 17vh;
  left: 5%;
  color: #FFFFFF;
  font-family: Avenir;
  font-weight: 800;
  width: 400px;
`;

export const Subtitle = styled.h5`
left: 5%;
color: #FFFFFF;
  font-size: 30px;
`

export const Img = styled.img`
  width: 50em;
`;

export const Section = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: black;
`;
