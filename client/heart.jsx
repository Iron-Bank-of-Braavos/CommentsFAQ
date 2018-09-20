import React, {Component} from 'react';
import styled from 'styled-components';

const heart = (props) => (
  <img className={props.className} src="https://png.icons8.com/metro/50/000000/hearts.png" />
)

const Heart = styled(heart)`
  height: 18px;
  width: 18px;
  display: inline;
  margin: 5px;
  vertical-align: middle;
`;

export default Heart
