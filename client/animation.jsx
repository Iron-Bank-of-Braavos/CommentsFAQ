import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';


const animate = (props) => (
  <div className={props.className}></div>
)

const horizon = (prevx, x) => keyframes`
  0% {
    transform : translateX(${prevx})
  }
  100% {
    transform : translateX(${x})
  }
`;

const Animation = styled(animate)`
  display: ${props => props.active || props.active === 0 ? 'block' : 'none'}
  height: auto;
  width: 92px;
  margin-top: -2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(40,40,40);
  border-bottom-width: 3px;
  animation: ${props => horizon(props.prev, props.margin)} 1s forwards;
`

export default Animation
