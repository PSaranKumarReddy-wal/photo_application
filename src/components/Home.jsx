import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Home = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const fetching = async () => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/albums"
      );
      const resultdata = await data.json();
      setAlbumsData(resultdata);
      console.log(resultdata);
    } catch (e) {
      console.log("error");
    }
  };
  const array = ["danger", "info", "warning", "danger"];

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <ListGroup className="listItems1">
        {albumsData.length &&
          albumsData.map((item) => (
            <ListGroupItem
              className="data"
              key={item.id}
              tag="button"
              color={array[Math.floor(Math.random() * array.length)]}
            >
              <Link
                to={`albums/${item.id}`}
              >{`${item.id}).${item.title}`}</Link>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};

export default Home;
