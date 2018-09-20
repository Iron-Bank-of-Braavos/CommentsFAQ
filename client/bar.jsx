import Camp from './campaign.jsx';
import Updates from './updates.jsx';
import Comments from './comments.jsx';
import React, {Component} from 'react';
import styled from 'styled-components';
import Rew from './rewards.jsx';

const container = (props) => (
  <div className={props.className} >
    <Rew click={props.click} active={props.active}/>
    <Camp click={props.click} active={props.active}></Camp>
    <Updates click={props.click} active={props.active}></Updates>
    <Comments click={props.click} active={props.active}></Comments>
    {props.children}
  </div>
)

const Bar = styled(container)`
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    @media screen and (max-width: 820px){
      width: 100%;
    }
`;

export default Bar;
