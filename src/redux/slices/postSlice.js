import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"post",
    initialState:{
        posts:[],
        loading:false
    },
    reducers:{
        setLoadingPost(state){
            return{...state,loading:true}
        },
        getPost(){},
        setPost(state,action){
            const {posts} = action.payload
            return {...state,posts,loading:false}
        },
        clearPost(state){
            return{posts:[],loading:false}
        }
    }
});

export const {getPost, setPost, clearPost,setLoadingPost} = postSlice.actions;
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