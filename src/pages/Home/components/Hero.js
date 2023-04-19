import React from 'react';
import styled from "styled-components";
import heroBg from '../../../assets/images/hero-bg.png';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 30px 40px;  
`
const Image = styled.img `
  display: block;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  padding: 30px;
  width: 1440px;
  height: 293px;
  margin-top: 129px;
`
export const Hero = () => {
  return (
    <Container>
      <Image />
    </Container>
  )
}
