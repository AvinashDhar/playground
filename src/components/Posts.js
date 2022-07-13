import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux'
import { getPost,clearPost } from '../redux/slices/postSlice';
import Button from './Button/Button';
import { useState } from 'react';
const Image = styled.img`
height: 100px;
width: 100px;
`;
const ProductContainer = styled.div``;

function Posts() {
    const [postCountStart,setPostCountStart] = useState(100);
    const dispatch = useDispatch();
    const {posts,loading} = useSelector(state => state.post);
    const handleLoadingPosts = (postCountStart) => {
        dispatch(getPost({postCountStart}));
    }
    const showLoading = () => {
            return loading && <CircularProgress style={{color: "#1c5dd5"}}  color="secondary" />
    }
  return (
    <div>Products
        <ProductContainer>
        <hr></hr>
        <Button onClick={() => handleLoadingPosts(postCountStart)}>Load posts</Button>
        <Button onClick={() => dispatch(clearPost())}>Clear posts</Button>
        <br/><br/><br/><br/>
        {showLoading()}
        <div>
        {posts?.slice(0, 5).map(item => {
            return(
            <div key={item.id}>
                <h4>{item.title}</h4>
                <Image src={item.image} alt="post"/>
            </div>)
        })}
        </div>
        </ProductContainer>
    </div>
  )
}

export default Posts

















// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { clear, getPosts } from '../redux/slices/postSlice';

// function Posts() {
//     const dispatch = useDispatch();
//     const {posts,status} = useSelector(state => state.post);
//     // useEffect(()=>{
//     //     dispatch(getPosts());
//     // },[dispatch])
//     const handleLoadingPosts = () => {
//         dispatch(getPosts());
//     }
//     const loader = () => {
//         return status?(status!=="ok"?(<span style={{fontSize:20,padding:20}}>loading</span>):null):null
//     }
//   return (
//     <div>Posts
//         <hr></hr>
//         <button onClick={handleLoadingPosts}>Load posts</button>
//         <button onClick={()=>dispatch(clear())}>Clear posts</button>
//         <br/>
//        {loader()}
//         <div>
//         {posts?.slice(0, 10).map(item => {
//             return(
//             <div key={item.id}>
//                 <h4>{item.title}</h4>
//                 <img src={item.thumbnailUrl} alt="post"/>
//             </div>)
//         })}
//         </div>
//     </div>
//   )
// }

// export default Posts