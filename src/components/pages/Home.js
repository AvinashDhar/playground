import React from "react";
import Nav from "../Nav";
import Products from "../Products";
import ProductFilter from "../ProductFilter";
import styled from "styled-components";
const NavbarContainer = styled.div`
  height: 5vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  background-color: #b4c8ed;
  height: 95vh;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const ProductFilterContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const ProductContainer = styled.div`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  background-color: #fff;
  padding: 0 5px;
  flex: 3;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
`;
const TodoContainer = styled.div`
  flex: 2;
  height: 100%;
`;

function Home() {
  return (
    <div>
      <NavbarContainer>
        <Nav />
      </NavbarContainer>
      <Container>
        <Wrapper>
          <ProductFilterContainer>
            <ProductFilter />
          </ProductFilterContainer>
          <ProductContainer>
            <Products />
          </ProductContainer>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Home;
