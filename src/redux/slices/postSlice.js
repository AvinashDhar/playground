import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:"post",
    initialState:{
        posts:[],
        filteredPosts:[],
        loading:false,
        category:'All',
        sortBy:'None'
    },
    reducers:{
        setLoadingPost(state){
            return{...state,loading:true}
        },
        getPost(){},
        setPost(state,action){
            const {posts} = action.payload;
            return {...state,posts,filteredPosts:posts,currentPosts:posts.slice(0,5),loading:false}
        },
        filterByCategory(state, action){
            const {category} = action.payload;
            if(category=='All'){
                return {...state,filteredPosts:state.posts,category:category,sortBy:'None'};
            } 
            const filteredPosts = state.posts.filter((post)=> post.category === category);
            return {...state,filteredPosts:filteredPosts,category:category,sortBy:'None'};
        },
        updateSortBy(state, action) {
            const {sortBy} = action.payload;
            return {...state,sortBy:sortBy}
        },
        sortByNone(state, action){
            const {sortByOption} = action.payload;
            if(state.category !='All'){
                //let postsArr = state.filteredPosts;
                return {...state,filteredPosts:state.posts, sortBy:sortByOption}
                //postsArr.sort(({price:a}, {price:b}) => a-b);
                //state.filteredPosts = postsArr;
                //state.sortBy=sortByOption;
            }
            else{
                //let postsArr = state.posts;
                //postsArr.sort(({price:a}, {price:b}) => a-b);
                return {...state,filteredPosts:state.posts, sortBy:sortByOption}
                //state.filteredPosts = postsArr;
                //state.posts = postsArr;
                //state.sortBy=sortByOption;
            }
            
        },
        sortByHighToLowPrice(state, action){
            const {sortByOption} = action.payload;
            if(state.category !='All'){
                let postsArr = state.filteredPosts;
                postsArr.sort(({price:a}, {price:b}) => b-a);
                state.filteredPosts = postsArr;
                state.sortBy = sortByOption;
            }
            else{
                if(sortByOption == 'None'){
                    state.filteredPosts =state.posts;
                    state.sortBy = sortByOption;
                }
                let postsArr = state.posts;
                postsArr.sort(({price:a}, {price:b}) => b-a);
                state.filteredPosts = postsArr;
                state.posts = postsArr;
                state.sortBy = sortByOption;
            }
            
        },
        sortByLowToHighPrice(state, action){
            const {sortByOption} = action.payload;
            if(state.category !='All'){
                let postsArr = state.filteredPosts;
                postsArr.sort(({price:a}, {price:b}) => a-b);
                state.filteredPosts = postsArr;
                state.sortBy=sortByOption;
            }
            else{
                let postsArr = state.posts;
                postsArr.sort(({price:a}, {price:b}) => a-b);
                state.filteredPosts = postsArr;
                state.posts = postsArr;
                state.sortBy=sortByOption;
            }
            
        },
        sortByCustomerRating(state, action){
            const {sortByOption} = action.payload;
            if(state.category !='All'){
                let postsArr = state.filteredPosts;
                postsArr.sort(({rating:a}, {rating:b}) => b.rate-a.rate);
                state.filteredPosts = postsArr;
                state.sortBy=sortByOption;
            }
            else{
                let postsArr = state.posts;
                postsArr.sort(({rating:a}, {rating:b}) => b.rate-a.rate);
                state.filteredPosts = postsArr;
                state.posts = postsArr;
                state.sortBy=sortByOption;
            }
            
        },
        clearPost(state){
            return{posts:[],currentPosts:[],filteredPosts:[],category:'',loading:false}
        }
    }
});

export const {getPost, setPost, getFilteredPosts, filterByCategory,sortByNone, updateSortBy, sortByHighToLowPrice,sortByLowToHighPrice, sortByCustomerRating,     clearPost,setLoadingPost} = postSlice.actions;
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