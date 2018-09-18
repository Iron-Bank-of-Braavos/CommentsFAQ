import React, {Component} from 'react';
import styled from 'styled-components';


const Date = styled.p`
  margin-left: 63px;
  position: absolute;
  color: grey;
  font-size: 14px;
  height: 10px;
  margin-top: -21px;
`;

const Title = styled.p`
  position: absolute;
  margin-left: 63px;
  margin-top: -41px;
  height: 14px;
  color: black;
  font-size: 14px;
`;

const title = (props, {className, children}) => (
  <div className={className}>
    <Title>{props.user}</Title>
    <Date>{props.time}</Date>
  </div>
)

const TiDi = styled(title)`
  display: inline-block;
  margin: 5px;
  height: 26px;
  width: auto;
  background-color: red;
`;

export default TiDi;
