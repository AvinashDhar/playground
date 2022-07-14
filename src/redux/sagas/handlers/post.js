import { call, put } from "redux-saga/effects";
import { setLoadingPost, setPost } from "../../slices/postSlice";
import { requestGetPost } from "../requesters/post";

export function* handleGetPost(action){
    try {
        //const {postCountStart} = action.payload;
        yield put(setLoadingPost())
        //const response = yield call(requestGetPost,postCountStart);
        const response = yield call(requestGetPost);
        console.log(response)
        const {data} = response;
        yield put(setPost({posts:data}))
    } catch (error) {
        console.log("error while setting post data after api call", error);
    }
    

}