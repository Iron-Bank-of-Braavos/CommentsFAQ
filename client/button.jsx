import React, {Component} from 'react';
import styled from 'styled-components';

const MyB = (props) => (
  <div onClick={props.click} className={props.className}>
    <p>Share this project</p>
  </div>
)

const MyButton = styled(MyB)`
background-color:rgba(0, 0, 0, 0);
border-bottom-color:rgb(61, 61, 102);
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
border-bottom-style:solid;
border-bottom-width:1.98864px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-width:1;
border-left-color:rgb(61, 61, 102);
border-left-style:solid;
border-left-width:1.98864px;
border-right-color:rgb(61, 61, 102);
border-right-style:solid;
border-right-width:1.98864px;
border-top-color:rgb(61, 61, 102);
border-top-left-radius:0px;
border-top-right-radius:0px;
border-top-style:solid;
border-top-width:1.98864px;
box-sizing:border-box;
color:rgb(61, 61, 102);
cursor:pointer;
display:inline-block;
font-family:
"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
font-size:14px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:700;
height:37.6136px;
padding-bottom:10px;
line-height:8px;
text-align:center;
transition-delay:0s;
transition-duration:0.2s;
transition-property:all;
transition-timing-function:ease-in-out;
vertical-align:baseline;
width:158.452px;
position: absolute;
right: 88px;
`

export default MyButton
