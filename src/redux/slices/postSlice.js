import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    filteredPosts: [],
    loading: false,
    category: "All",
    sortBy: "None",
  },
  reducers: {
    setLoadingPost(state) {
      return { ...state, loading: true };
    },
    getPost() {},
    setPost(state, action) {
      const { posts } = action.payload;
      return {
        ...state,
        posts,
        filteredPosts: posts,
        loading: false,
      };
    },
    filterByCategory(state, action) {
      const { category } = action.payload;
      if (category == "All") {
        return {
          ...state,
          filteredPosts: state.posts,
          category: category,
          sortBy: "None",
        };
      }
      const filteredPosts = state.posts.filter(
        (post) => post.category === category
      );
      return {
        ...state,
        filteredPosts: filteredPosts,
        category: category,
        sortBy: "None",
      };
    },
    getSortBy(state, action) {
      const sortByOption = action.payload;
      let postsArr = [...state.filteredPosts];
      if (sortByOption == "Price - high to low") {
        postsArr.sort(({ price: a }, { price: b }) => b - a);
      } else if (sortByOption == "Price - low to high") {
        postsArr.sort(({ price: a }, { price: b }) => a - b);
      } else if (sortByOption == "Customer Rating") {
        postsArr.sort(({ rating: a }, { rating: b }) => b.rate - a.rate);
      } else if (sortByOption == "None") {
        if(state.category == "All"){
            return { ...state, filteredPosts: state.posts, sortBy: sortByOption };
        } else {
            const  tempPosts = state.posts.filter(item => item.category == state.category);
            return { ...state, filteredPosts: tempPosts, sortBy: sortByOption };
        }  
      }
      return {...state,filteredPosts:postsArr,sortBy:sortByOption};
    },
  },
});
export const {
  getPost,
  setPost,
  filterByCategory,
  getSortBy,
  clearPost,
  setLoadingPost,
} = postSlice.actions;
export default postSlice.reducer;

// //example of createAsyncThunk

//import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getPosts = createAsyncThunk('post/get',async () =>{
//     return fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>
//        res.json()).then (json => json)
// })
// const postSlice = createSlice({
//     name:"post",
//     initialState:{
//         posts:[],
//         status:""
//     },
//     reducers:{
//         clear:(state) => {
//             state.posts = null;
//             state.status = "";
//         }
//     },
//     extraReducers:{
//         [getPosts.pending]: (state) => {
//             state.status = "fetching";
//         },
//         [getPosts.fulfilled]: (state,action) => {
//             state.posts = action.payload;
//             state.status = "ok";
//         },
//         [getPosts.rejected]: (state) => {
//             state.status = "failed";
//         }
//     }
// });

// export const {clear} = postSlice.actions;
// export default postSlice.reducer;
