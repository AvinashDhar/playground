import { call, put } from "redux-saga/effects";
import { setLoadingProduct, setProduct } from "../../slices/productSlice";
import { requestGetProduct } from "../requesters/product";

export function* handleGetProduct(action){
    try {
        //const {productCountStart} = action.payload;
        yield put(setLoadingProduct())
        //const response = yield call(requestGetproduct,productCountStart);
        const response = yield call(requestGetProduct);
        console.log(response)
        const {data} = response;
        yield put(setProduct({products:data}))
    } catch (error) {
        console.log("error while setting product data after api call", error);
    }
    

}