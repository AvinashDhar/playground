import React from 'react'
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
`;
const PostContainer = styled.div`
display:flex;
justify-content:space-between;
margin: 20px;
`;
const PostDetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
border-bottom: 1px solid #ddd;
`;
function PostItem({item}) {
  return (
    <>
        <PostContainer>
                
                <Image src={item.image} alt="post" />
                <PostDetailContainer>
                    <span>{item.title}</span>
                    <span><strong>Price: </strong>{item.price}</span>
                    <span><strong>Category: </strong>{item.category}</span>
                </PostDetailContainer>
              </PostContainer>
    </>
  )
}

export default PostItem