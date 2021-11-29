import {  Pagination, PaginationItem, PaginationLink,Spinner,Container,Row} from 'reactstrap';

import {useState,useEffect} from 'react';
import Photo from './photo';


const Photos=()=> {
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(true);

  
  
  useEffect(() => {
    setSpinner(true);
    const fetchData=async ()=>{
        try{
      let data=await fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`);
      let result=await data.json();
      setImageData(result);
      setSpinner(false);
    }catch(e){
        console.log(e);
    }
      
    }
    fetchData();
   
    // fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
    //     .then(response => response.json())
    //     .then(data =>{ 
    //     setImageData(data)
    //     setSpinner(false)});
  }, [page])

  

  const inputEvent=(e)=>{
      let input=e.target.value;
      console.log("clicking",e);
      if(e.key === "Enter"){
        input >= 1 && input <= 100?setPage(input):setPage(1);
      }
   
  }
  return (
    <div className="App">
      {spinner?  <Spinner color="primary" type="grow">Loading...</Spinner>: 
    //  <div className="cardss">
       <Container>
        <Row>
       {imageData.length?(imageData.map((item)=>(
        //  <div className="cardDesign" key={item.id}>
       <Photo key={item.id} item={item}/>
        //  </div>
       ))):<h1>data not found</h1>
       } 
       </Row>
     {/* </div> */}
     </Container>
     }

     
     <div className="pagination">
     <Pagination>
                <PaginationItem>
                    <PaginationLink previous onClick={()=>{
                       let pageval=page > 1?(page-1):3;
                        setPage(pageval);
                       }} />
                </PaginationItem>
               
                <PaginationItem>
                    <PaginationLink onClick={()=>setPage(1)}>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={()=>setPage(2)}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={()=>setPage(3)}>
                        3
                    </PaginationLink>
                </PaginationItem>
                
                
                
                <PaginationItem>
                    <PaginationLink next onClick={()=>{
                       let pageval=page < 3?(page+1):1;
                        setPage(pageval);
                       }}  />
                </PaginationItem>
                <PaginationItem title="Enter page">
                    <PaginationLink >
                        <input type="number" placeholder={page}   onKeyDown={inputEvent} style={{width:"50px",height:"25px"}}/>
                       
                    </PaginationLink>
                </PaginationItem>
            </Pagination> 
     </div>
    
     
       
    </div>
  );
}

export default Photos;
