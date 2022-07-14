import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productSlice";
import Button from "./Button/Button";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

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


function Products() {
  const [pageNum, setPageNum] = useState(1);
  const [totalNumOfPages, setTotalNumOfPages] = useState(1);

  const dispatch = useDispatch();
  const { filteredProducts, loading } = useSelector((state) => state.product);
  const [productstoShow, setProductstoShow] = useState([]);

  useEffect(() => {
    setProductstoShow(filteredProducts.slice(0, 5));
    setPageNum(1);
    setTotalNumOfPages(Math.ceil(filteredProducts.length / 5));
  }, [filteredProducts]);

  useEffect(() => {
    handleLoadingProducts();
  }, []);

  const handleLoadingProducts = () => {
    dispatch(getProduct());
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
    let updatedcurrentProducts = filteredProducts.slice(
      (pageNum + 1 - 1) * 5,
      (pageNum + 1) * 5
    );
    setProductstoShow(updatedcurrentProducts);
    setPageNum((prev) => prev + 1);
  };
  const decrementHandler = () => {
    if (pageNum == 1) return;
    let updatedcurrentProducts = filteredProducts.slice(
      (pageNum - 1 - 1) * 5,
      (pageNum - 1) * 5
    );
    setProductstoShow(updatedcurrentProducts);
    setPageNum((prev) => prev - 1);
  };
  return (
    <div>
      <ProductContainer>
        <ControllerContainer>
          {productstoShow == undefined || productstoShow.length == 0 ? null : (
            <Pagination>
              <Button
                style={{borderRadius:"5px"}}
                disabled={productstoShow == undefined || productstoShow.length == 0}
                onClick={decrementHandler}
              >
                <FontAwesomeIcon icon={faCircleMinus} />
              </Button>
              {" " + "Page: " + pageNum + " "}
              <Button
                style={{borderRadius:"5px"}}
                disabled={productstoShow == undefined || productstoShow.length == 0}
                onClick={incrementHandler}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </Button>
            </Pagination>
          )}
        </ControllerContainer>
        {showLoading()}
        <Product>
          {productstoShow?.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </Product>
      </ProductContainer>
    </div>
  );
}

export default Products;
