import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Image = styled.img`
  height: 100px;
  width: 100px;
`;
const PostContainer = styled.div`
display:flex;
justify-content:space-between;
margin: 5px;
padding: 5px;
-webkit-box-shadow: 0px 0px 21px -14px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 21px -14px rgba(0,0,0,0.75);
box-shadow: 0px 0px 21px -14px rgba(0,0,0,0.75);
`;
const PostDetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;
function PostItem({item}) {
    const ratingStars = () => {
        const numOfRating = new Array(Math.ceil(item.rating.rate)).fill(0);
        return numOfRating.map((item,index)=> <FontAwesomeIcon key= {index} style={{color: '#e7bb1c'}} icon={faStar} />)
    }
  return (
    <>
        <PostContainer>
                
                <Image src={item.image} alt="post" />
                <PostDetailContainer>
                    <span>{item.title}</span>
                    <span><strong>Price: </strong>{item.price}</span>
                    <span><strong>Category: </strong>{item.category}</span>
                    <span><strong>Rating: </strong>{ratingStars()}</span>
                </PostDetailContainer>
              </PostContainer>
    </>
  )
}

export default PostItem