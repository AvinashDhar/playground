import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//import { deleteUser, updateUser } from '../redux/slices/userSlice';
import { filterByCategory,sortByNone, sortByHighToLowPrice, sortByLowToHighPrice, sortByCustomerRating, updateSortBy } from "../redux/slices/postSlice";
import Button from "./Button/Button";
//import Input from "./Input/Input";

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

function ProfileEdit() {
  const dispatch = useDispatch();
  const { posts, category, sortBy } = useSelector((state) => state.post);
  
  // const [user, setUser] = useState({
  //     name: '',
  //     email: ''
  // })
  // const clickHandler = () => {
  //     dispatch(updateUser(user));
  // }
  // const deleteHandler = () => {
  //     dispatch(deleteUser());
  // }
  const categoryFilterHandler = (category) => {
    dispatch(filterByCategory({ category }));
  };
  const showCategories = () => {
    let categories = [...new Set(posts.map((item) => item.category))];
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
    switch (sortBy) {
        case 'None': {
            dispatch(sortByNone({sortBy}));
            dispatch(updateSortBy({sortBy}));
            break;
        }
        case 'Price - high to low': {
            
            dispatch(sortByHighToLowPrice({sortBy}));
            dispatch(updateSortBy({sortBy}));
            break;
        }
        case 'Price - low to high': {
          
          dispatch(sortByLowToHighPrice({sortBy}));
          dispatch(updateSortBy({sortBy}));
            break;
        }
        case 'Customer Rating' : {
          
          dispatch(sortByCustomerRating({sortBy}));
          dispatch(updateSortBy({sortBy}));
            break;
        }
        default: {
            return
        }
    }
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
        {/* <Input type= "text" placeholder="Enter your Name" value={user.name} onChange={e => setUser({...user,name:e.target.value})} />
        <Input type="email" placeholder="Enter your Email" value={user.email} onChange={e => setUser({...user,email:e.target.value})} />
        <Button onClick={clickHandler}>Update</Button>
        <Button onClick={deleteHandler}>Delete Profile</Button> */}
        {posts === undefined || posts.length === 0 ? null : (
          <CategoryContainer>
            <h4>Filter By categories:</h4>
            <Categories>{showCategories()}</Categories>
          </CategoryContainer>
        )}
        {posts === undefined || posts.length === 0 ? null : (<SortContainer>
        <h4>sort By:</h4>
            <SortByOptions>{showSortingOptions()}</SortByOptions>
        </SortContainer>)}
        
      </Wrap>
    </>
  );
}

export default ProfileEdit;
