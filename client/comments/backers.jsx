import React, {Component} from 'react';
import styled from 'styled-components';


const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: black;
`

const backer = ({className}) => {
  return (
  <div className={className}>
    <Text>Only backers can post commnets</Text>
  </div>
  );
}

const Backers = styled(backer)`
  position: absolute;
  right: 0px;
  height: 45px;
  width: 90%;
  background-color: #F0F3F4;
  border: 1px solid #f5f5e5;
  letter-spacing: 1px;
`;

export default Backers
