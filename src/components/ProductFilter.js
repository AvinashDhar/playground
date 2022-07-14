import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterByCategory,getSortBy } from "../redux/slices/productSlice";
import Button from "./Button/Button";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const CategoryContainer = styled.div``;
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SortContainer = styled.div``;
const SortByOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function ProductFilter() {
  const dispatch = useDispatch();
  const { products, category, sortBy } = useSelector((state) => state.product);
  
  const categoryFilterHandler = (category) => {
    dispatch(filterByCategory({ category }));
  };
  const showCategories = () => {
    let categories = [...new Set(products.map((item) => item.category))];
    categories.unshift("All");
    return categories.map((categoryItem) => (
      <Button
        style={{
          color: category == categoryItem ? "#000" : "#fff",
          backgroundColor: category == categoryItem ? "#e7bb1c" : "#000",
          borderRadius:"5px"
        }}
        key={categoryItem}
        onClick={() => {
          categoryFilterHandler(categoryItem);
        }}
      >
        {categoryItem}
      </Button>
    ));
  };
  const sortHandler = (sortBy) => {
    dispatch(getSortBy(sortBy));
  }
  const showSortingOptions = () => {
    const sortByOptions = ['None','Price - high to low', 'Price - low to high', 'Customer Rating'];
    return sortByOptions.map((item)=>(<Button key={item} style={{
        color: sortBy == item ? "#000" : "#fff",
        backgroundColor: sortBy == item ? "#e7bb1c" : "#000",
        borderRadius:"5px"
      }}
        onClick={() => {
          sortHandler(item);
        }}
      >
        {item}
      </Button>)  
    );
  };
  return (
    <>
      <Wrap>
        {products === undefined || products.length === 0 ? null : (
          <CategoryContainer>
            <h4>Filter By categories:</h4>
            <Categories>{showCategories()}</Categories>
          </CategoryContainer>
        )}
        {products === undefined || products.length === 0 ? null : (<SortContainer>
        <h4>sort By:</h4>
            <SortByOptions>{showSortingOptions()}</SortByOptions>
        </SortContainer>)}
      </Wrap>
    </>
  );
}

export default ProductFilter;
