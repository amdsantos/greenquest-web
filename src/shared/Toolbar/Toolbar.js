import React from 'react';
import styled from "styled-components";
import {
  Colors,  
} from '../common-components/DesignTokens';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import userIcon from '../../assets/images/user.png';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  border-top: 9px solid ${Colors.GREEN_900};
  padding: 30px 40px;
`
const Image = styled.img `
  display: block;
  background-image: url(${userIcon});
  background-repeat: no-repeat;
  padding: 30px;
`
export const Toolbar = () => {
  return (
    <Container>
      <Icon type ="logo"/>
        <Button>
          <Image />
          <Icon type ="arrowDown" />
        </Button>
    </Container>
  )
}
