import React, {Component} from 'react';
import styled from 'styled-components';

const image = ({className}) => (
  <div className={className}>
    <img/>
  </div>
)

const Image = styled(image)`
  height: 40px;
  border-radius: 50%;
  width: 40px;
  background-color: transparent;
  border: 1px solid lightgrey;
  margin-left: 15px;
  margin-top: 15px;
  overflow: hidden;
`;

export default Image
