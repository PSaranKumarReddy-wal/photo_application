import { Card, CardBody, CardTitle, Col, CardImg } from "reactstrap";

const Photo = ({ item, onClickImage }) => {
  const { url, thumbnailUrl, title } = item;
  return (
    <Col sm="4" xs="12" lg="3">
      <Card className="cards">
        <CardImg
          alt="Card image cap"
          src={thumbnailUrl}
          onClick={() => onClickImage({ url, title })}
          top
          width="100%"
        />

        <CardBody>
          <CardTitle tag="h5"> {title}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Photo;
