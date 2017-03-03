import React from 'react';
import styled from 'styled-components';

const WrapperObject = styled.div`
  margin: auto;
  max-width: 350px;
  padding: 12px;
  perspective: 100px;
  perspective-origin: center;
`;

const Wrapper  = (props) => {
	return (
    <WrapperObject>
      {props.children}
    </WrapperObject>
  )
}

export default Wrapper;
