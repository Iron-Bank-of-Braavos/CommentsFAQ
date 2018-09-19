import React, {Component} from 'react';
import styled from 'styled-components';

const baseText = (props) => (
  <div className={props.className}>
    <p>{props.text}</p>
  </div>
)

const Text = styled(baseText)`
  margin-left: 30px;
  height: fit-content;
  width: 94%;
  font-size: 14px;
  color: darkslategrey;
  letter-spacing: 1px;
  word-wrap: break-word;
`;

export default Text
