import React, { useEffect, useState } from "react";
import { fetchData } from "../../redux/reducers/Set_Product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/common/ProductCard";
import Pagination from "react-bootstrap/Pagination";
import { Row, Container} from "reactstrap";
import { Puff } from "react-loader-spinner";

const ProductPage = () => {
  const productData = useSelector((state) => {
    return state.product;
  });
  const [active, setActive] = useState(1);
  const handlePageClick = (num) => {
    setActive(num);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(active * 8));
  }, [active,dispatch]);

  let items = [];
  for (let number = 0; number <= productData.total / 8; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePageClick(number)}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Container>
        <Row>
          {productData.products.products ? (
            productData.products.products.map((item,index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <Puff
                width="100%"
                height="100vh"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
        </Row>
        <Pagination
          size="lg"
          className="d-flex justify-content-center mt-5 flex-wrap"
        >
          {items}
        </Pagination>
      </Container>
    </div>
  );
};

export default ProductPage;
