import React, { Component } from 'react';
import { Link } from 'react-router';
import TimeFormatter from './TimeFormatter';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    transform: translateY(25%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const WrapperObject = styled.div`
  margin: auto;
  max-width: 350px;
  padding: 24px;
`;

const WrappedLink = (props) => <Link to={props.to} className={props.className} children={props.children} />

const LinkLocation = styled(WrappedLink)`
  /*animation: ${appear} .3s linear 1;*/
  display: block;
  width: 100%;
  margin-bottom: 24px;
  min-height: 170px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  padding: 12px;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  transition: transform .2s, box-shadow .2s;
  &::after {
    content: "";
    position: absolute;
    width: 110%;
    height: 110%;
    top: 0;
    left: 0;
    background-color: ${props => props.color};
    opacity: 0.8;
  }
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 11px 14px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h2`
  font-size: 20px;
`

const Content = styled.div`
  font-size: 14px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  padding: 12px;
  width: 100%;
  transform: translate(-50%, -50%);
`

const Time = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  z-index: 1;
`

class LocationItem extends Component {
  shortenDescription = () => {
    return `${this.props.description.substring(0, 125)}...`
  };


  render() {
    return (
      <LinkLocation color={this.props.color} to={`location/${this.props.id}`} image={this.props.image}>
        <Content>
          <Title>{this.props.title}</Title>
          <p>{this.shortenDescription()}</p>
        </Content>

        <Time>{TimeFormatter(this.props.timeDuration)}</Time>

      </LinkLocation>
    );
  }
}

export default LocationItem;
