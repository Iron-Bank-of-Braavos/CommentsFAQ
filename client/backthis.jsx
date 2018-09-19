import React, {Component} from 'react';
import styled from 'styled-components';
import MyButton from './button.jsx'
import Save from './save.jsx';


const backthis = (props) => (
  <div className={props.className}>
    <MyButton></MyButton>
    <Save></Save>
  </div>
)

const BackThis = styled(backthis)`
  border-bottom-color:rgb(40, 40, 40);
  border-left-color:rgb(40, 40, 40);
  border-right-color:rgb(40, 40, 40);
  border-top-color:rgb(40, 40, 40);
  color:rgb(40, 40, 40);
  display:inline;
  font-family:
  "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:14px;
  font-stretch:100%;
  font-style:normal;
  font-variant-caps:normal;
  font-variant-east-asian:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-weight:400;
  height:37.6136px;
  line-height:21px;
  position:absolute;
  margin-left: -50px;
  margin-top: 15px;
  text-align:right;
  vertical-align:middle;
  width:430.398px;
  -webkit-font-smoothing:antialiased;
  @media (max-width: 700px) {
    display: none;
  }
`


export default BackThis;
