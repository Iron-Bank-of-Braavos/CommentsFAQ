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
      clicked: undefined,
      prev: undefined,
      margin: undefined,
      width: undefined
    }
    this.click = this.click.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    var clicked = this.state.clicked;
    var width = window.innerWidth;
    if(this.state.width < 700 && width > 700 && clicked === 0){
      clicked += 1
      this.click(clicked)
      this.setState({
        clicked: clicked,
        width: width
      });
    }else{
      this.click(clicked)
      this.setState({
        width: width
      })
    }
  }

  click(i){
    // const margins_three = ['-112px', '125px', '240px'];
    const margins_two = ['19px', '137px', '250px', '365px'];
    const margins = ['12px', '125px', '240px'];
    var prev = this.state.margin;
    var width = this.state.width;

    if(width > 640 && prev !== margins[i-1] || !prev && width > 640 ){
      this.setState({
        clicked: i,
        margin: margins[i-1],
        prev
      });
    }else if(this.state.margin !== margins_two[i] || !prev){
      this.setState({
        clicked: i,
        margin: margins_two[i],
        prev
      })
    }
  }

  render(){
  // pass falsey from animation to click function
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
