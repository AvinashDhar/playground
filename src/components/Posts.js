import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faMinus,
  faPlusCircle,
  faPlusMinus,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  getFilteredPosts,
  clearPost,
} from "../redux/slices/postSlice";
import Button from "./Button/Button";
import { useState } from "react";
import PostItem from "./PostItem";

const ProductContainer = styled.div``;
const ControllerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Posts() {
  const [postCountStart, setPostCountStart] = useState(100);
  const [pageNum, setPageNum] = useState(1);

  const dispatch = useDispatch();
  const { posts, currentPosts, loading } = useSelector((state) => state.post);

  const handleLoadingPosts = (postCountStart) => {
    dispatch(getPost({ postCountStart }));
  };
  const showLoading = () => {
    return (
      loading && (
        <CircularProgress style={{ color: "#1c5dd5" }} color="secondary" />
      )
    );
  };
  const incrementHandler = () => {
    if (pageNum == 4) return;
    dispatch(getFilteredPosts({ pageNum: pageNum + 1 }));
    setPageNum((prev) => prev + 1);
  };
  const decrementHandler = () => {
    if (pageNum == 1) return;
    dispatch(getFilteredPosts({ pageNum: pageNum - 1 }));
    setPageNum((prev) => prev - 1);
  };

  return (
    <div>
      Products
      <ProductContainer>
        <hr></hr>
        <ControllerContainer>
          <Button onClick={() => handleLoadingPosts(postCountStart)}>
            Load products
          </Button>
          {currentPosts == undefined || currentPosts.length == 0 ? null:(<Pagination>
            <Button
              disabled={currentPosts == undefined || currentPosts.length == 0}
              onClick={decrementHandler}
            >
              <FontAwesomeIcon icon={faCircleMinus} />
            </Button>
            {" " + "Page: " + pageNum + " "}
            <Button
              disabled={currentPosts == undefined || currentPosts.length == 0}
              onClick={incrementHandler}
            >
              <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
          </Pagination>)}
          
          <Button
            onClick={() => {
              dispatch(clearPost());
              setPageNum(1);
            }}
          >
            Clear products
          </Button>
        </ControllerContainer>

        <br />
        <br />
        <br />
        <br />
        {showLoading()}
        <div>
          {currentPosts?.map((item) => {
            return (
                <PostItem key={item.id} item={item}/>
            );
          })}
        </div>
      </ProductContainer>
    </div>
  );
}

export default Posts;
