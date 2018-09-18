import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BackThis from './backthis.jsx';
import Bar from './bar.jsx';
import Animation from './animation.jsx';

const EmptyBar = styled.div`
  width: 102%;
  height: 67px;
  border-top: 1px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px
  border-color: #e0e0e0;
  border-style: solid;
  left: -10px;
`;

const Spacing = styled.div`
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  vertical-align: baseline;
`;

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: 0,
      prev: undefined,
      margin: undefined
    }
    this.click = this.click.bind(this);
  }

  click(i){
    const margins = ['12px', '125px', '240px'];
    var prev = this.state.margin;

    if(this.state.margin !== margins[i-1] || !prev){
      this.setState({
        clicked: i,
        margin: margins[i-1],
        prev
      });
    }
  }

  render(){
    return(
      <EmptyBar>
        <Spacing>
          <Bar click={this.click} active={this.state.clicked}>
            <Animation active={this.state.clicked} margin={this.state.margin} prev={this.state.prev}></Animation>
          </Bar>
          <BackThis></BackThis>
        </Spacing>
      </EmptyBar>
    )
  }
}

ReactDOM.render(
  <Nav />,
  document.getElementById('root')
)
