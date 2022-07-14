import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    category: "All",
    sortBy: "None",
  },
  reducers: {
    setLoadingProduct(state) {
      return { ...state, loading: true };
    },
    getProduct() {},
    setProduct(state, action) {
      const { products } = action.payload;
      return {
        ...state,
        products,
        filteredProducts: products,
        loading: false,
      };
    },
    filterByCategory(state, action) {
      const { category } = action.payload;
      if (category == "All") {
        return {
          ...state,
          filteredProducts: state.products,
          category: category,
          sortBy: "None",
        };
      }
      const filteredProducts = state.products.filter(
        (product) => product.category === category
      );
      return {
        ...state,
        filteredProducts: filteredProducts,
        category: category,
        sortBy: "None",
      };
    },
    getSortBy(state, action) {
      const sortByOption = action.payload;
      let productsArr = [...state.filteredProducts];
      if (sortByOption == "Price - high to low") {
        productsArr.sort(({ price: a }, { price: b }) => b - a);
      } else if (sortByOption == "Price - low to high") {
        productsArr.sort(({ price: a }, { price: b }) => a - b);
      } else if (sortByOption == "Customer Rating") {
        productsArr.sort(({ rating: a }, { rating: b }) => b.rate - a.rate);
      } else if (sortByOption == "None") {
        if(state.category == "All"){
            return { ...state, filteredProducts: state.products, sortBy: sortByOption };
        } else {
            const  tempProducts = state.products.filter(item => item.category == state.category);
            return { ...state, filteredProducts: tempProducts, sortBy: sortByOption };
        }  
      }
      return {...state,filteredProducts:productsArr,sortBy:sortByOption};
    },
  },
});
export const {
  getProduct,
  setProduct,
  filterByCategory,
  getSortBy,
  setLoadingProduct,
} = productSlice.actions;
export default productSlice.reducer;

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
