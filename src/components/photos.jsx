import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
  Container,
  Row,
} from "reactstrap";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import Photo from "./photo";
import ImagePreview from "./imagePreview";
import ImageAdd from "./addImageU";

const Photos = () => {
  const { id } = useParams();

  console.log("paramas", id);
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(true);
  const [model, setModel] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const [addImage, setAddImage] = useState(false);
  useEffect(() => {
    setSpinner(true);
    const fetchData = async () => {
      try {
        let data = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}/photos`
        );
        let result = await data.json();
        console.log("fetchhhh:", result);
        setImageData(result);
        setSpinner(false);
      } catch (e) {
        console.log("data not found");
      }
    };
    fetchData();
  }, [id]);

  const inputEvent = (e) => {
    let input = e.target.value;
    console.log("clicking", e);
    if (e.key === "Enter") {
      input >= 1 && input <= 100 ? setPage(input) : setPage(1);
    }
  };

  const imageClick = (imgLinks) => {
    setModel(true);
    setImagePath(imgLinks);
  };

  const imageClickClose = () => {
    setModel(false);
    setImagePath(null);
  };

  const checkingNew = () => {
    setAddImage(!addImage);
  };

  return (
    <div className="App">
      {addImage && <ImageAdd checkingNew={checkingNew} page={page} />}
      {model && (
        <ImagePreview imageData={imagePath} imageClickClose={imageClickClose} />
      )}
      {spinner ? (
        <Spinner color="primary" type="grow">
          Loading...
        </Spinner>
      ) : (
        <Container>
          <button className="btn btn-success mb-5" onClick={checkingNew}>
            New Photo
          </button>
          <Row>
            {imageData.length ? (
              imageData.map((item) => (
                <Photo key={item.id} item={item} onClickImage={imageClick} />
              ))
            ) : (
              <h1>data not found</h1>
            )}
          </Row>
        </Container>
      )}

      {/* <div className="pagination">
        <Pagination>
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => {
                let pageval = page > 1 ? page - 1 : 3;
                setPage(pageval);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => setPage(2)}>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => setPage(3)}>3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              next
              onClick={() => {
                let pageval = page < 3 ? page + 1 : 1;
                setPage(pageval);
              }}
            />
          </PaginationItem>
          <PaginationItem title="Enter page">
            <PaginationLink>
              <input
                type="number"
                placeholder={page}
                onKeyDown={inputEvent}
                style={{ width: "50px", height: "25px" }}
              />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div> */}
    </div>
  );
};

export default Photos;
