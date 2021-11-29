import {  CardImg,Card,CardBody,CardTitle,Col} from 'reactstrap';
const Photo=({item})=>{
    return (
        
        <Col xl="3" sm="4" xs="12" lg="3" >
        <Card className="cards">
          <CardImg alt="Card image cap" src={item.thumbnailUrl} top width="100%"/>
           <CardBody>
           <CardTitle tag="h5"> {item.title}</CardTitle>
           </CardBody>
        </Card>
        </Col>
        
    )
}
export default Photo;