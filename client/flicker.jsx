import React, {Component} from 'react';
import styled from 'styled-components';

const main = (props) => (
  <div className={props.className}>
    <p>Showing {props.current} of {props.total} comments</p>
  </div>
)
const MessageFlicker = styled(main)`
position: absolute;
text-align: center;
height: auto;
width: 102%;
background-color: white;
border: none;
left: -1px;
margin-top: 10px;
`;

export default MessageFlicker
