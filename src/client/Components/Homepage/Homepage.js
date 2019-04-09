import React, { Component } from 'react';
import { Grid } from "../../styleguide/components";
import Hero from './Hero/Hero';
import "./Homepage.scss";
import JoinForm from './JoinForm/JoinForm.js';
import RequestForm from './RequestForm/RequestForm';
import { requestCity, REQUEST_CITY } from '../../utils/broadcast'
import { broadCastData, subscribeToPeers } from '../../utils/socket';

class Homepage extends Component {
  state = {
    userInfo: {
      name: "",
      city:"",
      age: "",
      address: "",
    },
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
    switch (data.type) {
      case REQUEST_CITY:
        if(this.state.userInfo.city === data.filter) {
          alert("Someone wants to access your data")
        }
        break;
    }
  };

  onFormJoin = () => {
    this.setState({joinedChain: true}, ()=>{
      subscribeToPeers(this.dataReducer);
    });
  };

  render() {
    const { joinedChain, filterCity } = this.state;
    return (
      <>
        <Hero/>
        <Grid.Container>
          <Grid noPadding>
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
                      onSubmit={()=>{broadCastData(requestCity(filterCity))}} />
                }
              </Grid.Col>
              <Grid.Col sm={12} lg={4} md={4} />
            </Grid.Row>
          </Grid>
        </Grid.Container>
      </>
    )
  }
}

export default Homepage;
