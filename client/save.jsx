import React, {Component} from 'react';
import styled from 'styled-components';
import SaveButton from './savebutton.jsx';

const save = (props) => (
  <div className={props.className}>
    <SaveButton></SaveButton>
  </div>
)

const Save = styled(save)`
  border-bottom-color:rgb(40, 40, 40);
  border-bottom-style:none;
  border-bottom-width:0px;
  border-image-outset:0px;
  border-image-repeat:stretch;
  border-image-slice:100%;
  border-image-source:none;
  border-image-width:1;
  border-left-color:rgb(40, 40, 40);
  border-left-style:none;
  border-left-width:0px;
  border-right-color:rgb(40, 40, 40);
  border-right-style:none;
  border-right-width:0px;
  border-top-color:rgb(40, 40, 40);
  border-top-style:none;
  border-top-width:0px;
  color:rgb(40, 40, 40);
  display:inline-block;
  font-family:"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:14px;
  font-stretch:100%;
  font-style:normal;
  font-variant-caps:normal;
  font-variant-east-asian:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-weight:400;
  height:20.9091px;
  line-height:21px;
  margin-bottom:0px;
  margin-left:20px;
  margin-right:10px;
  margin-top:6px;
  padding-bottom:0px;
  padding-left:0px;
  padding-right:0px;
  padding-top:0px;
  text-align:right;
  vertical-align:baseline;
  width:auto;
  -webkit-font-smoothing:antialiased;
  position: absolute;
  right: 0px;
`;

export default Save
