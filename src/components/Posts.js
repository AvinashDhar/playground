import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/slices/postSlice";
import Button from "./Button/Button";
import { useState, useEffect } from "react";
import PostItem from "./PostItem";

const ProductContainer = styled.div``;
const ControllerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
    top: 6vh;
    width: 100%;
    background: #fff;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Product = styled.div`
margin-top: 50px;
`;


function Posts() {
  const [pageNum, setPageNum] = useState(1);
  const [totalNumOfPages, setTotalNumOfPages] = useState(1);

  const dispatch = useDispatch();
  const { filteredPosts, loading } = useSelector((state) => state.post);
  const [poststoShow, setPoststoShow] = useState([]);

  useEffect(() => {
    setPoststoShow(filteredPosts.slice(0, 5));
    setPageNum(1);
    setTotalNumOfPages(Math.ceil(filteredPosts.length / 5));
  }, [filteredPosts]);

  useEffect(() => {
    handleLoadingPosts();
  }, []);

  const handleLoadingPosts = () => {
    dispatch(getPost());
  };
  const showLoading = () => {
    return (
      loading && (
        <CircularProgress
          style={{ color: "#1c5dd5", fontSize: 12 }}
          color="secondary"
        />
      )
    );
  };
  const incrementHandler = () => {
    if (pageNum == totalNumOfPages) return;
    let updatedcurrentPosts = filteredPosts.slice(
      (pageNum + 1 - 1) * 5,
      (pageNum + 1) * 5
    );
    setPoststoShow(updatedcurrentPosts);
    setPageNum((prev) => prev + 1);
  };
  const decrementHandler = () => {
    if (pageNum == 1) return;
    let updatedcurrentPosts = filteredPosts.slice(
      (pageNum - 1 - 1) * 5,
      (pageNum - 1) * 5
    );
    setPoststoShow(updatedcurrentPosts);
    setPageNum((prev) => prev - 1);
  };
  return (
    <div>
      <ProductContainer>
        <ControllerContainer>
          {poststoShow == undefined || poststoShow.length == 0 ? null : (
            <Pagination>
              <Button
                style={{borderRadius:"5px"}}
                disabled={poststoShow == undefined || poststoShow.length == 0}
                onClick={decrementHandler}
              >
                <FontAwesomeIcon icon={faCircleMinus} />
              </Button>
              {" " + "Page: " + pageNum + " "}
              <Button
                style={{borderRadius:"5px"}}
                disabled={poststoShow == undefined || poststoShow.length == 0}
                onClick={incrementHandler}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </Button>
            </Pagination>
          )}
        </ControllerContainer>
        {showLoading()}
        <Product>
          {poststoShow?.map((item) => {
            return <PostItem key={item.id} item={item} />;
          })}
        </Product>
      </ProductContainer>
    </div>
  );
}

export default Posts;
