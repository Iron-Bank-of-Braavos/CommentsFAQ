import React, {Component} from 'react';
import styled from 'styled-components';
//don't touch this one//looks good.

var Lin = ({className}) => (
  <a className={className} href='#'>Check out the FAQ</a>
);

var Link = styled(Lin)`
  color: black;
`;

var Quest = ({className}) => (
  <div className={className}>
    <p>Have a question?</p>
  </div>
)

var Question = styled(Quest)`
  margin-top: 30px;
  margin-bottom: -10px;
`;

var MessageF = ({className}) => (
<div className={className}>
    <p>Use this space to cheer the creator along, and talk to your fellow backers.</p>
    <Question></Question>
    <Link></Link>
</div>
)

const Message = styled(MessageF)`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 1em;
  padding-top: 0;
  background-color: #ffffff;
  height: auto;
  width: 80%;
  border-left: 2px silver solid;
  @media (max-width: 700px) {
    display: none;
  }
`;


export default Message
