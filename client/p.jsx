import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Circle = ({className}) => (
  <div className={className}>
  </div>
)

const Spinner = styled(Circle)`
  border: solid rgba(250,250,150,0.1) 2px;
  border-right: solid rgb(200,200,200) 2px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin: auto;
  animation: ${rotate360} 1s linear infinite;
`

const Para = (props) => (
  <p>Load more</p>
)


const P = (props) => {
  if(props.loading){
    return <Spinner />
  }else{
    return <Para />
  }
}

export default P;
