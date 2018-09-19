import React, {Component} from 'react';
import styled from 'styled-components';

const main = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)
const Main = styled(main)`
  position: absolute;
  height: auto;
  width: 90%;
  top: 80px;
  right: 0px;
  background-color: #F0F3F4;
  border: 1px solid lightgrey;
  padding-bottom: 10px;
`;

export default Main
