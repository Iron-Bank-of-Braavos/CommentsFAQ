import React, {Component} from 'react';
import styled from 'styled-components';

const main = (props) => (
  <button onClick={props.cli} className={props.className}>
    {props.children}
  </button>
)

const Load = styled(main)`
cursor: pointer;
position: absolute;
margin-top: 60px;
text-align: center;
background-color: rgb(43, 96, 255);
font-size: 14px;
height: 48px;
width: 100.4%;
left: -3px;
padding: 10px;
line-height: 0;
color: white;
`;

export default Load
