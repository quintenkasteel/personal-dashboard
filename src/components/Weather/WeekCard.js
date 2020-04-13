import React from 'react';
import styled from 'styled-components';

const WeekCardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`

const WeekCard = ({ children }) => {
  return (
    <WeekCardContainer>
      {children}
    </WeekCardContainer>
  )
}


export default WeekCard;

