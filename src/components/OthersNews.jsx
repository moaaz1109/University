

import styled from "styled-components";



import '../index.css';

const Container = styled.div`


background-color:var(--wh);
  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 50vh;
       }
 
`;



const Wrapp = styled.div`
  


  
  background:url(/img/lp.png) no-repeat ;
 
   margin-left:-500px;

  background-position: center;
  display: grid;

  place-items: center;
  padding-top: 220px;
  background-repeat: no-repeat;
  background-size: 40%;
height:38%;

  @media only screen and (max-width: 380px) {
    height: 100%;
       }
`;




const InfoContai = styled.div`
 
  margin-right:-1170px;
  margin-top:-180px;
 

`;

const Titl = styled.h1`
font-size: 20px;

  color:var(--nn);
`;

const La = styled.h1`
margin-top:20px;
font-size:22px;
color:var(--nn);

`;



const Button = styled.button`
  padding: 10px;
  margin-top:20px;
  font-size: 20px;
  font-weight:600;
  background-color: transparent;
  cursor: pointer;
  color:brown;

  &:hover {
    
    transform: scale(1.1);
    
  }
`;



const OthersNews = () => {
 

  return (
    <Container>
     
     <Wrapp>

<InfoContai>
<Titl>Faculty of computer science new building is ready</Titl>
              
              <La> Google company visited Moaaz university </La>
      
      <Button>
        Press here to check
      </Button>
      </InfoContai>

  

     

</Wrapp>
       
    </Container>






  );
};

export default OthersNews;
