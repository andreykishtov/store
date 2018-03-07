import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Item = styled.div`
  border: 1px solid black;
  width: 50vw;
  min-width: 300px;
  min-height: 50vh;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const Price = styled.p``;
const Button = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 10 };
  }

  buy = async data => {
    const result = await axios.post('http://localhost:4000', data);
    console.log(result);
  };

  render() {
    const { price } = this.state;
    return (
      <Wrapper>
        <Item>
          <Title>Item Name</Title>
          <Price>15</Price>
          <Button onClick={() => this.buy(price)}>Buy</Button>
        </Item>
      </Wrapper>
    );
  }
}

export default App;
