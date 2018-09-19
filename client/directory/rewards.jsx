import React, {Component} from 'react';
import styled from 'styled-components';

const rewards = (props) => (
  <a className={props.className} onClick={()=>{props.click(0)}}>
    Rewards
  </a>
)

const Rew = styled(rewards)`
border-bottom-color:rgb(40, 40, 40);
border-bottom-style: ${props => props.active === 0 ? 'solid' : 'none'};
border-bottom-width:2.99716px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(0, 158, 116);
border-left-style:${props => props.active === 0 ? 'dotted' : 'none'};
border-left-width:1px;
border-right-color:rgb(0, 158, 116);
border-right-style:${props => props.active === 0 ? 'dotted' : 'none'};
border-right-width:1px;
border-top-color:rgb(0, 158, 116);
border-top-style:${props => props.active === 0 ? 'dotted' : 'none'};
border-top-width:1px;
color:rgb(40, 40, 40);
cursor:pointer;
display:inline-block;
font-family:"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size:14px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:600;
height:23.6364px;
line-height:24px;
margin-bottom:0px;
margin-left:18px;
margin-right:18px;
margin-top:0px;
padding-bottom:20px;
padding-left:16px;
padding-right:9px;
padding-top:20px;
text-decoration-color:rgb(40, 40, 40);
text-decoration-line:none;
text-decoration-style:solid;
vertical-align:baseline;
width:64.9574px;
-webkit-font-smoothing:antialiased;
@media (min-width: 640px) {
  display: none;
}
`

export default Rew;
