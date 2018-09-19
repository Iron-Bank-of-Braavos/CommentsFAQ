import React, {Component} from 'react';
import styled from 'styled-components';
import Heart from './heart.jsx';

const savebutton = (props) => (
  <button className={props.className}>
    <Heart></Heart>
    Save
  </button>
)

const SaveButton = styled(savebutton)`
  position: inline;
  align-items:flex-start;
  background-attachment:scroll;
  background-clip:border-box;
  background-color:rgba(0, 0, 0, 0);
  background-image:none;
  background-origin:padding-box;
  background-position-x:0%;
  background-position-y:0%;
  background-repeat-x:;
  background-repeat-y:;
  background-size:auto;
  border-bottom-color:rgb(128, 128, 158);
  border-bottom-style:none;
  border-bottom-width:0px;
  border-image-outset:0px;
  border-image-repeat:stretch;
  border-image-slice:100%;
  border-image-source:none;
  border-image-width:1;
  border-left-color:rgb(128, 128, 158);
  border-left-style:none;
  border-left-width:0px;
  border-right-color:rgb(128, 128, 158);
  border-right-style:none;
  border-right-width:0px;
  border-top-color:rgb(128, 128, 158);
  border-top-style:none;
  border-top-width:0px;
  box-sizing:border-box;
  color:rgb(128, 128, 158);
  cursor:pointer;
  display:inline-block;
  font-family:"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:14px;
  font-stretch:100%;
`

export default SaveButton
