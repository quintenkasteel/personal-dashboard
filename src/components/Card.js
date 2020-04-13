import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  background: red;
`
const Card = ({children }) => {
 
  return (
    <CardContainer className="card">
      {children}
    </CardContainer>
  )
}

export default Card;