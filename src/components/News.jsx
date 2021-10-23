

import styled from "styled-components";



import '../index.css';
import OthersNews from './OthersNews'

const Container = styled.div`


border:0.3px solid var(--bor) ;
margin-right:80px;
margin-left:100px;
height:270px;
background-color:var(--wh);
  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 50vh;
       }
 
`;


const Wrapper = styled.div`
  
  display: flex;
 
  
  background:url(/img/news.png) no-repeat ;
  
   margin-left:-500px;

  background-position: center;
  display: grid;

  place-items: center;
  padding-top: 11rem;
  background-repeat: no-repeat;
  background-size: 40%;
height:35%;

  @media only screen and (max-width: 380px) {
    height: 100%;
       }
`;


const InfoContainer = styled.div`
  flex: 1;
  margin-right:-1170px;
  margin-top:-180px;

`;

const Title = styled.h1`
font-size: 20px;

  color:var(--nn);
`;

const Las = styled.h1`
margin-top:20px;
font-size:22px;
color:var(--nn);

`;
const Sp = styled.div`
margin-top:30px;

`;

const Button = styled.button`
  padding: 10px;
  margin-top:70px;
  font-size: 20px;
  font-weight:600;
  background-color: transparent;
  cursor: pointer;
  color:brown;

  &:hover {
    
    transform: scale(1.1);
    
  }
`;



const News = () => {
 

  return (
    <Container>
     
      
      <Wrapper>

      <InfoContainer>
              <Title>Mr:Moaaz Esmail visited our university yesterday</Title>
              
              <Las>The Last simister will begin after two weeks</Las>
            
            <Button>
              Press here to check
            </Button>
            </InfoContainer>
      
        
  
           
      
      </Wrapper>
    <Sp>

    </Sp>
    <OthersNews />
    </Container>
   
  );
};

export default News;
