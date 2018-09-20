import React, {Component} from 'react';
import styled from 'styled-components';
import Image from './image.jsx';
import Text from './text.jsx';
import TiDa from './titledate.jsx';


const Box = (props) => (
  <div className={props.className}>
    <Image></Image>
    <TiDa user={props.name} time={props.time}></TiDa>
    <Text text={props.text}></Text>
  </div>
);

const StyledBox = styled(Box)`
  height: auto;
  width: ${props => props.id ? '91%' : '96%'};
  margin: 10px;
  margin-left: ${props => props.id ? '7%' : '2%'}
  margin-bottom: 0px;
  background-color: white;
  border: 1px solid lightgrey;
`

export default StyledBox
