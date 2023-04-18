import React from 'react';
import styled from "styled-components";
import {
  Colors,  
} from '../common-components/DesignTokens';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  border-top: 9px solid ${Colors.GREEN_900};
  padding: 30px 40px;
  
`
const Image = styled.img `
  display: block;
`
export const Toolbar = () => {
  return (
    <Container>
      <Icon type ="logo"/>
        <Button>
        <Image src='../../assets/images/user.png' alt='User'/>
        <Icon type ="arrowDown"/>
        </Button>
    </Container>
  )
}
