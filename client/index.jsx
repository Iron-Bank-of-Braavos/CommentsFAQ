import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import MessageF from './message.jsx';
import Backers from './backers.jsx';
import Main from './main.jsx';
import StyledBox from './usermsgs.jsx';
import MessageFlicker from './flicker.jsx';
import Load from './load.jsx';
import P from './p.jsx';


const AbsL = styled.div`
  display: inline-block;
  position: relative;
  height: 96vh;
  left: 0;
  @media (min-width: 700px) {
    width: 65vw;
  }
  @media (max-width: 699px) {
    width: 92vw;
  }
`;

const AbsR = styled.div`
  position: absolute;
  top: 0px;
  height: 96vh;
  margin-left: 67.5vw;
  width: 32.5vw;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      loaded: null,
      total: Math.floor(Math.random() * 1000) + 1000,
      loading: false
    }
    this.renderMessages = this.renderMessages.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount(){
    this.loadMore();
  }

  loadMore(){
    this.setState({
      loading: true
    });
    if(this.state.loaded <= total){
      axios.get('/comments')
        .then((res, data)=>{
          var hold = res.data;
          if(hold[0].parent_id){
            for(let i = 1; i < hold.length; i++){
              if(hold[i].parent_id){
                let hold_one = hold.slice(1,i);
                let hold_two = hold.slice(i);
                hold_one.push(hold[0])
                hold = hold_one.concat(hold_two)
              }
            }
          }
          return hold;
      })
      .then((data)=>{
        if(!this.state.data){
          this.setState({
            data,
            loaded: 30,
            loading: false
          });
        }else{
          let loaded = this.state.loaded + 30
          data = data.concat(this.state.data);
          this.setState({
            data,
            loaded,
            loading: false
          });
        }
      })
      .catch((err)=>{
        throw err;
      });
    }
  }

  renderMessages(){
    let rendArr = [];
    let data = this.state.data;
    if(data){
      for(let i = 0; i < data.length; i++){
        let d = new Date().toString();
        rendArr.push(<StyledBox key={i} name={data[i].name} time={d} text={data[i].message} id={data[i].parent_id}></StyledBox>)
      }
      rendArr.push(<MessageFlicker key='flicker' current={this.state.loaded} total={this.state.total} />);
      rendArr.push(<Load key='load' cli={this.loadMore} ><P loading={this.state.loading}/></Load>);
      return (
        <Main>
          {rendArr}
        </Main>
      )
    }else{
      return
    }
  }

  render(){
    return(
      <div>
        <AbsL>
          <Backers></Backers>
          {this.renderMessages()}
        </AbsL>
        <AbsR>
          <MessageF></MessageF>
        </AbsR>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
