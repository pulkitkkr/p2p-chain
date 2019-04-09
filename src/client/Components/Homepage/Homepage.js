import React, { Component } from 'react';
import { Grid } from "../../styleguide/components";
import Hero from './Hero/Hero';
import "./Homepage.scss";
import JoinForm from './JoinForm/JoinForm.js';
import RequestForm from './RequestForm/RequestForm';
import { requestCity, REQUEST_CITY, grantInformation, INFORMATION_GRANT } from '../../utils/broadcast'
import { broadCastData, subscribeToPeers } from '../../utils/socket';

class Homepage extends Component {
  state = {
    userInfo: {
      name: "",
      city:"",
      age: "",
      address: "",
    },
    grantedData:[],
    peerId: "",
    filterCity: "",
    joinedChain: false
  };

  setValue = (fieldName, value) => {
    let { userInfo } = this.state;
    userInfo[fieldName] = value;
    this.setState({userInfo});
  };

  getValue = (fieldName) => {
    const { userInfo } = this.state;
    return userInfo[fieldName];
  };

  dataReducer = (data) => {
    console.log(data.type == REQUEST_CITY, REQUEST_CITY, data.type);
    switch (data.type) {
      case REQUEST_CITY:
        if(this.state.userInfo.city == data.filter) {
          const access = confirm("Someone Wants data for users in "+this.state.userInfo.city+", Shall we grant access ?");
          if(access) {
            broadCastData(grantInformation(this.state.userInfo, data.sender));
          }
        }
        break;
      case INFORMATION_GRANT:
        let availData = this.state.grantedData;
        if(data.grantedTo === this.state.peerId) {
          availData.push(data);
          this.setState({grantedData: data});
        }
      break;
      default:
        console.log(data);
    }
  };
  setId = (id) => {
    this.setState({peerId: id});
  };
  onFormJoin = () => {
    this.setState({joinedChain: true}, ()=>{
      subscribeToPeers(this.dataReducer, this.setId);
    });
  };

  render() {
    const { joinedChain, filterCity, peerId, grantedData } = this.state;
    return (
      <>
        <Hero/>
        <Grid.Container>
          <Grid noPadding>
            <Grid.Row>
              { peerId && <h2> Your PeerId is: {peerId}</h2>}
            </Grid.Row>
            <Grid.Row>
              <Grid.Col sm={12} lg={4} md={4}>
                <JoinForm
                  joinedChain={joinedChain}
                  onSubmit={this.onFormJoin}
                  setValue={this.setValue}
                  getValue={this.getValue}
                />
              </Grid.Col>
              <Grid.Col sm={12} lg={4} md={4}>
                {
                  joinedChain &&
                    <RequestForm
                      value={filterCity}
                      setCityValue={(value)=>{this.setState({filterCity: value})}}
                      onSubmit={()=>{broadCastData(requestCity(filterCity, peerId))}} />
                }
              </Grid.Col>
              <Grid.Col sm={12} lg={4} md={4}>
                {
                  grantedData.map((obj)=>(
                    <p>{JSON.stringify(obj)}</p>
                  ))
                }
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}

export default Homepage;
