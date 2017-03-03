import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import TimePicker from './TimePicker';
import Wrapper from './styling/wrapper';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



class LocationList extends Component {
  render() {
    return (
      <Container timePicked={this.props.timePicked}>
        <WelcomeImage src="/welcome.svg" alt=""/>
        <Title>How much time do you have?</Title>
        <Wrapper>
          <TimePicker timeDurations={this.props.timeDurations} dispatch={this.props.dispatch}/>
          <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            { this.props.timePicked && this.props.locations.map((location, index) => !location.hidden && <LocationItem color={Colors[index % Colors.length]}key={location.id} {...location} />) }
          </ReactCSSTransitionGroup>
        </Wrapper>
      </Container>

    );
  }
}

const WelcomeImage = styled.img`
  display: block;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  height: 160px;
`

const Container = styled.div`
  position: relative;
  padding-top: 200px;
  transition: transform .3s ease-in;
  transform: translateY(${ props => props.timePicked ? '-268px' : '0' });
`

const Title = styled.h1`
  font-size: 18px;
  color: #29A4AC;
  font-weight: normal;
  text-align: center;
  padding: 24px 12px;
`

const Colors = ['#FDD161', '#E8A13D', '#29A4AC', '#445561', '#AFD5D9'];

export default connect(state => state)(LocationList);
