import React from "react";
import styled from "styled-components";
import {
  Colors,
  Shadows,
  FontFamilies,
  FontWeights,
  
} from '../common-components/DesignTokens';

export const Button = styled.div`
border: none;
border-radius: 10px;
background-color: ${Colors.GREEN_900};
box-shadow: ${Shadows.ONE};
padding: 8px 11px;
`

const ButtonInfo = styled.div`
font-family: ${FontFamilies.PRIMARY};
font-weight: ${FontWeights.MEDIUM};`

// export const Button = () => {
//   return (
//     <>
//       <ButtonBg />
//       <ButtonInfo/>
//     </>
//   )
// }
